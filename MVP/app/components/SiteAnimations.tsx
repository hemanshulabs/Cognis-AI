"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("site-animations-ready");
      return;
    }

    const cleanups: Array<() => void> = [];
    let smoothScrollTween: gsap.core.Tween | null = null;
    let scrollTarget = window.scrollY;

    const ctx = gsap.context(() => {
      document.documentElement.classList.add("site-animations-ready");

      const maxScroll = () =>
        Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight
        );

      const syncScrollTarget = () => {
        if (!smoothScrollTween?.isActive()) {
          scrollTarget = window.scrollY;
        }
      };

      const handleWheel = (event: WheelEvent) => {
        if (event.ctrlKey || event.defaultPrevented) return;

        event.preventDefault();

        const deltaMultiplier =
          event.deltaMode === 1
            ? 18
            : event.deltaMode === 2
              ? window.innerHeight
              : 1;

        if (!smoothScrollTween?.isActive()) {
          scrollTarget = window.scrollY;
        }

        scrollTarget = gsap.utils.clamp(
          0,
          maxScroll(),
          scrollTarget + event.deltaY * deltaMultiplier * 1.55
        );

        smoothScrollTween = gsap.to(window, {
          duration: 0.38,
          scrollTo: {
            y: scrollTarget,
            autoKill: true,
          },
          ease: "power2.out",
          overwrite: "auto",
          onComplete: () => {
            scrollTarget = window.scrollY;
          },
        });
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("scroll", syncScrollTarget, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("scroll", syncScrollTarget);
        smoothScrollTween?.kill();
      });

      gsap.fromTo(
        "[data-hero-reveal]",
        {
          autoAlpha: 0,
          y: 28,
          filter: "blur(14px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.11,
          delay: 0.18,
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-section-reveal]").forEach((section) => {
        const title = section.querySelectorAll("[data-reveal-title]");
        const copy = section.querySelectorAll("[data-reveal-copy]");
        const media = section.querySelectorAll("[data-reveal-media]");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        if (title.length) {
          timeline.fromTo(
            title,
            {
              autoAlpha: 0,
              yPercent: 72,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.05,
              stagger: 0.08,
            },
            0
          );
        }

        if (copy.length) {
          timeline.fromTo(
            copy,
            {
              autoAlpha: 0,
              y: 26,
              filter: "blur(10px)",
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.08,
            },
            title.length ? 0.18 : 0
          );
        }

        if (media.length) {
          timeline.fromTo(
            media,
            {
              autoAlpha: 0,
              y: 46,
              scale: 0.965,
              clipPath: "inset(12% 0 0 0)",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              clipPath: "inset(0% 0 0 0)",
              duration: 1.1,
              stagger: 0.1,
            },
            0.22
          );
        }

      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 58,
            scale: 0.975,
            filter: "blur(12px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.95,
            delay: Math.min((index % 4) * 0.06, 0.18),
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-media]").forEach((media) => {
        const visual = media.querySelector("video, img");
        if (!visual) return;

        gsap.fromTo(
          visual,
          {
            yPercent: -3,
            scale: 1.04,
          },
          {
            yPercent: 3,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
        const handleClick = (event: MouseEvent) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;

          const target = document.querySelector<HTMLElement>(href);
          if (!target) return;

          event.preventDefault();

          gsap.to(window, {
            duration: 0.78,
            scrollTo: {
              y: target,
              offsetY: 92,
              autoKill: true,
            },
            ease: "power2.inOut",
          });
        };

        anchor.addEventListener("click", handleClick);
        cleanups.push(() => anchor.removeEventListener("click", handleClick));
      });

      ScrollTrigger.refresh();
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
