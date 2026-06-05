import Link from "next/link";

type Variant = "primary" | "secondary" | "outline-white" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-dark hover:brightness-110",
  secondary: "bg-green text-white hover:brightness-110",
  "outline-white": "border border-white text-white hover:bg-white/10",
  "outline-dark": "border border-dark text-dark hover:bg-dark hover:text-white",
};

export function Button({
  href, children, variant = "primary", external = false, className = "",
}: {
  href: string; children: React.ReactNode; variant?: Variant; external?: boolean; className?: string;
}) {
  const cls = `inline-block rounded px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider transition ${variants[variant]} ${className}`;
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
