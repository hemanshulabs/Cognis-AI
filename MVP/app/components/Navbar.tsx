import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Resources", href: "#resources", active: true },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[clamp(12px,1.05vw,20px)]">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[clamp(58px,4.2vw,80px)] w-[clamp(610px,42.2vw,802px)] items-center justify-between rounded-[999px] bg-white pl-[clamp(22px,1.58vw,30px)] pr-[4px] shadow-none"
      >
        <Link
          href="/"
          aria-label="Cognis AI home"
          className="flex h-full w-[clamp(116px,8.42vw,160px)] items-center rounded-full transition-opacity hover:opacity-75"
        >
          <Image
            src="/logo/logo.svg"
            alt=""
            width={42}
            height={44}
            priority
            className="h-[clamp(26px,1.9vw,36px)] w-[clamp(25px,1.84vw,35px)]"
          />
        </Link>

        <div className="hidden items-center gap-[clamp(24px,1.79vw,34px)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex h-11 items-center gap-[clamp(7px,0.53vw,10px)] text-[clamp(13px,0.89vw,17px)] font-normal tracking-[-0.02em] text-[#2f2928] transition-colors hover:text-[#827367]"
            >
              {link.active ? (
                <span className="h-[clamp(5px,0.37vw,7px)] w-[clamp(5px,0.37vw,7px)] bg-[#827367] transition-transform group-hover:scale-125" />
              ) : null}
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#demo"
          className="inline-flex h-[clamp(52px,3.79vw,72px)] w-[clamp(158px,11.46vw,218px)] items-center justify-center rounded-[999px] border-[clamp(3px,0.21vw,4px)] border-white bg-[#322c2b] px-7 text-[clamp(13px,0.95vw,18px)] font-semibold tracking-[-0.03em] text-[#d1c5bc] transition-colors hover:bg-[#241f1e] hover:text-white"
        >
          Get Template
        </Link>
      </nav>
    </header>
  );
}
