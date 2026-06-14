"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-forest shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center self-stretch">
          <div className="flex h-16 w-16 items-center justify-center bg-black">
            <Image src="/images/logo.jpg" alt="Sydney South West Volleyball" width={64} height={64} className="object-cover" preload />
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`rounded px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition ${active ? "bg-green text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                {link.label}
              </Link>
            );
          })}
          <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
            className="ml-4 rounded bg-gold px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-dark transition hover:brightness-110">
            Join Now
          </a>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
