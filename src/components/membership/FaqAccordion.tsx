"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need experience to join?",
    a: "Not at all. We have programs specifically designed for complete beginners — our coaches will guide you through everything from your first serve to court positioning. The social sessions are also a low-pressure way to get started.",
  },
  {
    q: "What's the difference between Full and Recreational membership?",
    a: "Full Membership gives you access to our competitive teams (YSVL and SVL) in addition to all training and social sessions. Recreational covers all training and social sessions without the league commitment — perfect if you want regular volleyball without a competition schedule.",
  },
  {
    q: "Where are sessions held?",
    a: "We run sessions across two venues — Fairfield and Bonnyrigg, both in South West Sydney. Check our socials or contact us for the most up-to-date schedule.",
  },
  {
    q: "How do I trial for a competitive team?",
    a: "Trials are held each season for YSVL and SVL teams. Express interest via our Contact page or follow us on socials for announcements. You'll need a Full Membership to participate in league competition.",
  },
  {
    q: "What equipment do I need?",
    a: "Just yourself and non-marking indoor shoes. We provide volleyballs for all sessions. Knee pads are optional — they're not required to start.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-dark/10">
      {FAQS.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-heading text-base font-semibold uppercase tracking-wide text-dark">
              {faq.q}
            </span>
            <span
              aria-hidden="true"
              className={`mt-0.5 shrink-0 text-xl text-green transition-transform ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
