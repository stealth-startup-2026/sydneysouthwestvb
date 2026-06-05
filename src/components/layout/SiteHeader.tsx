import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-dark/10 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="SSWV" width={40} height={40} className="rounded-full object-cover" preload />
          <span className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-dark sm:text-xl">
            Sydney South West
            <span className="block text-green">Volleyball</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((link) => (
            <Link key={link.href} href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-dark transition hover:text-green">
              {link.label}
            </Link>
          ))}
          <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
            className="rounded bg-green px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110">
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
