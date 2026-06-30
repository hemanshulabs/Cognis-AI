import Link from "next/link";

const legalLinks = [
  { label: "Designed by Orbis", href: "/about#Team" },
] as const;

export function Footer() {
  return (
    <footer
      data-section-reveal
      className="relative isolate overflow-hidden bg-[#322c2b] px-5 pt-[92px] text-[#f1ece8] md:pt-[120px]"
    >
      <div className="footer-bg-animation pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[58%] opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(50,44,43,0)_0%,rgba(50,44,43,0.72)_70%,#322c2b_100%)]" />

      <div className="mx-auto max-w-[1800px]">
        <div>
          <h2
            data-reveal-title
            className="[font-family:var(--font-mattone)] text-[clamp(42px,4vw,76px)] font-normal leading-none tracking-[-0.045em] text-[#f1ece8]"
          >
            Cognis
          </h2>
          <p
            data-reveal-copy
            className="mt-6 max-w-[500px] text-[clamp(15px,1vw,18px)] leading-[1.28] tracking-[-0.03em] text-[#d1c5bc]"
          >
            Cognis is a real-time financial engagement engine for banks and
            fintech teams. It detects money moments, picks the next best
            action, and reaches customers with timely, context-aware guidance.
          </p>
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
