"use client";

import { useRef, useState, type FormEvent } from "react";

export default function JapaneseContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const honey = useRef<HTMLInputElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending"); setError("");
    const fields = new FormData(form);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({name:fields.get("name"), company:fields.get("company"), email:fields.get("email"), industry:fields.get("industry"), message:fields.get("message"), honeypot:honey.current?.value || ""}) });
      if (!response.ok) {
        setError(response.status === 429 ? "送信回数の上限に達しました。時間をおいてお試しください。" : response.status === 400 ? "氏名・メールアドレス・お問い合わせ内容をご確認ください。内容は10文字以上でご入力ください。" : "送信できませんでした。時間をおいて再度お試しいただくか、sales@thefocus.jpまでご連絡ください。");
        setStatus("error"); return;
      }
      setStatus("success"); form.reset();
    } catch { setError("通信エラーが発生しました。接続をご確認のうえ、再度お試しください。"); setStatus("error"); }
  }
  const input = "mt-2 w-full rounded-xl border border-primary/25 bg-white p-3 text-base focus:ring-2 focus:ring-primary/30";
  return <form onSubmit={submit} className="space-y-6">
    <input ref={honey} name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0" />
    <div className="grid gap-6 sm:grid-cols-2">
      <label className="block text-sm font-medium">氏名（必須）<input name="name" autoComplete="name" required minLength={2} maxLength={200} className={input} /></label>
      <label className="block text-sm font-medium">会社名・活動名<input name="company" autoComplete="organization" maxLength={200} className={input} /></label>
    </div>
    <label className="block text-sm font-medium">メールアドレス（必須）<input name="email" type="email" autoComplete="email" required className={input} /></label>
    <label className="block text-sm font-medium">ご相談分野<input name="industry" placeholder="例：貿易、リサーチ、デジタル商品" maxLength={200} className={input} /></label>
    <label className="block text-sm font-medium">お問い合わせ内容（必須）<textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="ご要望、ご予算、希望納期などをお知らせください。" className={input} /></label>
    <button disabled={status === "sending"} className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white disabled:opacity-50">{status === "sending" ? "送信中…" : "お問い合わせを送信"}</button>
    {status === "success" && <p role="status" className="rounded-xl bg-surface-1 p-4">お問い合わせを受け付けました。通常、日本の営業日で1〜2日以内の返信を目指しています。</p>}
    {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">{error}</p>}
  </form>;
}
