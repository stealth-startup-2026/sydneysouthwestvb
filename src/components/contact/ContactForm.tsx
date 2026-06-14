"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="border border-green/20 bg-green/10 p-8 text-center">
        <span aria-hidden="true" className="text-4xl">✅</span>
        <p className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-green">Message Sent!</p>
        <p className="mt-2 text-sm text-muted">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }
  const inputCls = "w-full border border-dark/15 bg-white px-4 py-3 text-sm text-dark placeholder:text-muted focus:border-green focus:outline-none focus:ring-1 focus:ring-green";
  const labelCls = "mb-1.5 block font-heading text-xs font-semibold uppercase tracking-wider text-dark";
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={labelCls}>Name</label><input id="name" type="text" required placeholder="Your name" className={inputCls} /></div>
        <div><label htmlFor="email" className={labelCls}>Email</label><input id="email" type="email" required placeholder="your@email.com" className={inputCls} /></div>
      </div>
      <div>
        <label htmlFor="subject" className={labelCls}>Subject</label>
        <select id="subject" className={inputCls}>
          {["General Enquiry", "Membership", "Team Trials", "Programs & Classes", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div><label htmlFor="message" className={labelCls}>Message</label><textarea id="message" required rows={5} placeholder="How can we help?" className={`${inputCls} resize-none`} /></div>
      <button type="submit" className="w-full bg-green py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-white transition hover:brightness-110">Send Message</button>
    </form>
  );
}
