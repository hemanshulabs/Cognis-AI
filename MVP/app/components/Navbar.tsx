"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { MovingBorderLink } from "./ui/aceternity";

const navLinks = [
  { label: "Capabilities", href: "#capabilities", active: true },
  { label: "Agents", href: "#features" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const groupRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!indicatorRef.current) return;

    gsap.set(indicatorRef.current, {
      opacity: 0,
      scaleX: 0.78,
      transformOrigin: "center center",
    });
  }, []);

  const slideIndicatorTo = useCallback((index: number) => {
    const group = groupRef.current;
    const indicator = indicatorRef.current;
    const link = linkRefs.current[index];

    if (!group || !indicator || !link) return;

    const groupRect = group.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    gsap.to(indicator, {
      x: linkRect.left - groupRect.left - 14,
      y: linkRect.top - groupRect.top + 4,
      width: linkRect.width + 28,
      height: linkRect.height - 8,
      opacity: 1,
      scaleX: 1,
      duration: 0.46,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  const hideIndicator = useCallback(() => {
    if (!indicatorRef.current) return;

    gsap.to(indicatorRef.current, {
      opacity: 0,
      scaleX: 0.82,
      duration: 0.24,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, []);

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

        <div
          ref={groupRef}
          onPointerLeave={hideIndicator}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              hideIndicator();
            }
          }}
          className="relative hidden items-center gap-[clamp(24px,1.79vw,34px)] md:flex"
        >
          <span ref={indicatorRef} className="nav-hover-indicator" aria-hidden="true" />
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              ref={(node) => {
                linkRefs.current[index] = node;
              }}
              href={link.href}
              onPointerEnter={() => slideIndicatorTo(index)}
              onFocus={() => slideIndicatorTo(index)}
              className="nav-pill-link group flex h-11 items-center gap-[clamp(7px,0.53vw,10px)] text-[clamp(15px,1.03vw,19px)] font-normal tracking-[-0.02em] text-[#2f2928]"
            >
              {link.active ? (
                <span className="h-[clamp(5px,0.37vw,7px)] w-[clamp(5px,0.37vw,7px)] bg-[#827367] transition-transform group-hover:scale-125" />
              ) : null}
              {link.label}
            </Link>
          ))}
        </div>

        <MovingBorderLink
          href="#features"
          className="h-[clamp(50px,3.55vw,68px)] w-[clamp(184px,11.7vw,224px)]"
          innerClassName="text-[clamp(13px,0.9vw,17px)] font-semibold tracking-[-0.03em]"
        >
          Explore Agents
        </MovingBorderLink>
      </nav>
    </header>
  );
}
