import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ── Rate limiter (in-memory, per server instance) ─────────── */
const submissionLog = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissionLog.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS) {
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

function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/* ── Nodemailer transporter ────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ── POST handler ──────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, industry, message, honeypot } = body;

    // Honeypot — silently drop bot submissions
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    // Sanitize inputs
    const cleanName     = sanitize(String(name)).slice(0, 200);
    const cleanCompany  = company  ? sanitize(String(company)).slice(0, 200)  : "Not provided";
    const cleanIndustry = industry ? sanitize(String(industry)).slice(0, 200) : "Not specified";
    const cleanMessage  = sanitize(String(message)).slice(0, 5000);

    // Send email
    await transporter.sendMail({
      from:    `"FOCUS Website" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_USER, // sends to same Gmail inbox
      replyTo: email,                 // reply goes directly to the person who submitted
      subject: `New Inquiry from ${cleanName} — FOCUS Website`,
      text: `
New contact form submission from FOCUS Co., Ltd. website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:               ${cleanName}
Company:            ${cleanCompany}
Email:              ${email}
Industry Interest:  ${cleanIndustry}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${cleanMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via thefocus.jp contact form
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f0f7fc;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0a1420 0%,#0c2a40 100%);padding:28px 32px;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:1px;">FOCUS Co., Ltd.</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:2px;">New Website Inquiry</p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#b6bdc1;font-size:12px;width:140px;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0a1420;font-size:13px;font-weight:600;">${cleanName}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#b6bdc1;font-size:12px;">Company</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0a1420;font-size:13px;">${cleanCompany}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#b6bdc1;font-size:12px;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;">
            <a href="mailto:${email}" style="color:#0c71af;text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#b6bdc1;font-size:12px;">Industry</td>
          <td style="padding:10px 0;color:#0a1420;font-size:13px;">${cleanIndustry}</td>
        </tr>
      </table>

      <div style="background:#f0f7fc;border-radius:8px;padding:16px 20px;">
        <p style="margin:0 0 8px;color:#b6bdc1;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
        <p style="margin:0;color:#0a1420;font-size:13px;line-height:1.7;">${cleanMessage.replace(/\n/g, "<br>")}</p>
      </div>

      <div style="margin-top:24px;">
        <a href="mailto:${email}" style="display:inline-block;background:#0c71af;color:#ffffff;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">
          Reply to ${cleanName} →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8f8f8;padding:16px 32px;border-top:1px solid #f0f0f0;">
      <p style="margin:0;color:#b6bdc1;font-size:11px;">Submitted via <a href="https://www.thefocus.jp" style="color:#0c71af;text-decoration:none;">thefocus.jp</a> contact form</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please email us at jamal@thefocus.jp" },
      { status: 500 }
    );
  }
}