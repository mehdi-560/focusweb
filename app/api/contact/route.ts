import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
// Simple in-memory rate limiter (per server instance).
// For production at scale, replace with a durable store (e.g. Redis/Upstash).
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissionLog.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY is missing" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, industry, message, honeypot } = body;

    // Honeypot check — bots tend to fill every field, humans never see this one
    if (honeypot) {
      return NextResponse.json({ success: true }); // silently drop, don't tip off bots
    }

    // Server-side validation — never trust client input
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a message of at least 10 characters." },
        { status: 400 }
      );
    } 

    // Basic sanitization — strip any HTML tags from free-text fields
    const sanitize = (input: string) => input.replace(/<[^>]*>/g, "").trim();

    const cleanName = sanitize(name).slice(0, 200);
    const cleanCompany = company ? sanitize(String(company)).slice(0, 200) : "Not provided";
    const cleanIndustry = industry ? sanitize(String(industry)).slice(0, 200) : "Not specified";
    const cleanMessage = sanitize(message).slice(0, 5000);

    await resend.emails.send({
      from: "FOCUS Website <onboarding@resend.dev>", // replace with verified domain in production
      to: "jamal@thefocus.jp",
      replyTo: email,
      subject: `New inquiry from ${cleanName}`,
      text: `
New contact form submission

Name: ${cleanName}
Company: ${cleanCompany}
Email: ${email}
Industry of interest: ${cleanIndustry}

Message:
${cleanMessage}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
