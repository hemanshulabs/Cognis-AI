"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

type MovingBorderLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function MovingBorderLink({
  href,
  children,
  className = "",
  innerClassName = "",
}: MovingBorderLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const fill = fillRef.current;
    const content = contentRef.current;

    if (!link || !fill || !content) return;

    gsap.set(fill, {
      xPercent: -50,
      yPercent: 0,
      scaleX: 0.26,
      opacity: 1,
      transformOrigin: "50% 0%",
      force3D: true,
    });
    gsap.set(content, { color: "#d1c5bc" });

    const timeline = gsap
      .timeline({
        paused: true,
        defaults: { overwrite: "auto" },
      })
      .to(
        fill,
        {
          yPercent: -74,
          scaleX: 1,
          duration: 1.6,
          ease: "power4.inOut",
        },
        0
      )
      .to(
        content,
        {
          color: "#322c2b",
          duration: 0.55,
          ease: "power2.out",
        },
        0.16
      );

    const animateIn = () => timeline.play();
    const animateOut = () => timeline.reverse();

    link.addEventListener("pointerenter", animateIn);
    link.addEventListener("pointerleave", animateOut);
    link.addEventListener("focus", animateIn);
    link.addEventListener("blur", animateOut);

    return () => {
      link.removeEventListener("pointerenter", animateIn);
      link.removeEventListener("pointerleave", animateOut);
      link.removeEventListener("focus", animateIn);
      link.removeEventListener("blur", animateOut);
      timeline.kill();
    };
  }, []);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`moving-border-link ${className}`}
    >
      <span ref={fillRef} className="moving-border-link__fill" aria-hidden="true" />
      <span ref={contentRef} className={`moving-border-link__inner ${innerClassName}`}>
        {children}
        <svg
          aria-hidden="true"
          className="moving-border-link__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h12m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div className={`aceternity-beams ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export function SpotlightCard({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <div className={`spotlight-card ${className}`} {...props}>
      {children}
    </div>
  );
}
