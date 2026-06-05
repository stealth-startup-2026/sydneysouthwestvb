"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle navigation"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
        <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-dark py-4 shadow-lg">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 font-heading text-lg uppercase tracking-wide text-white hover:bg-green/20 hover:text-gold">
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-6">
            <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full rounded bg-gold py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider text-dark">
              Join Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
