import Link from "next/link";

const pageLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Agents", href: "#features" },
  { label: "Contact", href: "mailto:hello@cognis.ai" },
] as const;

const contactLinks = [
  { label: "hello@cognis.ai", href: "mailto:hello@cognis.ai" },
  { label: "(212) 555-0198", href: "tel:12125550198" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Designed by FTC Studio", href: "https://contra.com/" },
] as const;

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="footer-link group w-fit text-[18px] leading-none tracking-[-0.035em] text-[#f1ece8] transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#322c2b] px-5 pt-[92px] text-[#f1ece8] md:pt-[120px]">
      <div className="footer-bg-animation pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[58%] opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(50,44,43,0)_0%,rgba(50,44,43,0.72)_70%,#322c2b_100%)]" />

      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(520px,700px)]">
          <div>
            <h2 className="[font-family:var(--font-mattone)] text-[clamp(42px,4vw,76px)] font-normal leading-none tracking-[-0.045em] text-[#f1ece8]">
              Cognis
            </h2>
            <p className="mt-6 max-w-[500px] text-[clamp(15px,1vw,18px)] leading-[1.28] tracking-[-0.03em] text-[#d1c5bc]">
              Cognis is a real-time financial digital engagement engine for
              banks and fintech teams that need to respond to customer money
              moments with context.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="mb-8 text-[16px] leading-none tracking-[-0.03em] text-[#827367]">
                Links
              </p>
              <nav className="flex flex-col gap-5" aria-label="Footer links">
                {pageLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-8 text-[16px] leading-none tracking-[-0.03em] text-[#827367]">
                Contact
              </p>
              <nav className="flex flex-col gap-5" aria-label="Footer contact links">
                {contactLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-[110px] flex flex-col gap-6 border-t border-[#f1ece8]/40 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[16px] leading-none tracking-[-0.03em] text-[#d1c5bc]">
            Cognis 2026
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-link text-[16px] leading-none tracking-[-0.03em] text-[#827367] transition-colors hover:text-[#d1c5bc]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
