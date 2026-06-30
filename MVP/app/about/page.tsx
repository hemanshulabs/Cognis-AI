import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SiteAnimations } from "../components/SiteAnimations";
import { MovingBorderLink } from "../components/ui/aceternity";

export const metadata: Metadata = {
  title: "About | Cognis",
  description:
    "The story behind Cognis, the real-time financial engagement engine built for SBI Hackathon @ GFF 2026.",
};

const scaleMetrics = [
  {
    value: "7",
    suffix: "",
    title: "Agent pipeline",
    description:
      "Seven specialist agents each own a clear step, from signal capture to outcome learning.",
    variant: "dark",
  },
  {
    value: "1",
    suffix: "",
    title: "Live customer memory",
    description:
      "Balances, salary patterns, spending behavior, and derived traits stay current in one profile.",
    variant: "image",
  },
  {
    value: "<1",
    suffix: "s",
    title: "Instant actioning",
    description:
      "New banking events can be scored, checked, and routed to the right next action in under a second.",
    variant: "light",
  },
] as const;

const teamMembers = [
  {
    name: "Hemanshu Yogesh Patil",
    role: "Leader, Backend & APIs",
    description: "Node, Supabase, and the full event pipeline.",
    image:
      "https://framerusercontent.com/images/QKeWqk3BxjcpslvgB9IcawC2jq8.png?scale-down-to=1024&width=1460&height=1334",
  },
  {
    name: "Samyak Baliram Fulzele",
    role: "ML & LLM Decisioning",
    description: "Churn models, propensity scoring, and the NBA engine.",
    image:
      "https://framerusercontent.com/images/WqJYmUMy6IArBxuG8vecDssbX4.png?scale-down-to=2048&width=6314&height=8355",
  },
  {
    name: "Nikhil Nandkumar Sonawane",
    role: "Architecture & Research",
    description: "System design, agent orchestration, and technical direction.",
    image:
      "https://framerusercontent.com/images/LxCDVI598JiFH9D1xG3KGBvyrI.png?width=1122&height=1402",
  },
  {
    name: "Atharva Suresh Patil",
    role: "Frontend",
    description: "React, Next.js, and the Cognis landing experience.",
    image:
      "https://framerusercontent.com/images/4XHuKL67qeby3NO99zjddRg9I.jpg?scale-down-to=1024&width=1098&height=1094",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1ece8] text-[#322c2b]">
      <SiteAnimations />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen w-screen max-w-none overflow-hidden bg-[#322c2b] p-0 lg:h-screen">
        <div className="grid min-h-screen w-full overflow-hidden bg-[#322c2b] lg:h-full lg:grid-cols-2">
          <div className="relative min-h-screen overflow-hidden bg-[#322c2b] lg:h-full lg:min-h-0">
            <div className="absolute left-[clamp(38px,3.16vw,60px)] top-[30.3vh] z-10 w-[calc(100%-clamp(76px,6.32vw,120px))] max-w-[830px]">
              <h1
                data-hero-reveal
                className="[font-family:var(--font-mattone)] text-[clamp(56px,5.5vw,104px)] font-normal leading-none tracking-[-0.04em] text-[#f1ece8]"
              >
                The knowing mind
              </h1>

              <p
                data-hero-reveal
                className="mt-[clamp(20px,1.45vw,28px)] max-w-[610px] text-[16px] leading-[1.32] tracking-[-0.025em] text-[#d1c5bc]"
              >
                From the Latin cognoscere, to recognize and know. Cognis
                watches banking events as they happen, understands what they
                mean for each person, and responds with something useful,
                right when it matters.
              </p>

              <div data-hero-reveal className="mt-[clamp(22px,1.63vw,31px)] h-px w-full bg-[#827367]" />

              <div data-hero-reveal>
                <MovingBorderLink
                  href="#story"
                  className="mt-[clamp(22px,1.63vw,31px)] h-[clamp(52px,3.68vw,70px)] w-[clamp(224px,15.77vw,300px)]"
                  innerClassName="text-[clamp(14px,0.95vw,18px)] font-semibold tracking-[-0.03em]"
                >
                  Read the Story
                </MovingBorderLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[70vh] overflow-hidden bg-[#2a2523] lg:h-full lg:min-h-0">
            <Image
              src="https://framerusercontent.com/images/RKcyQYxWyLWG6aORc01OsSEA7t8.webp?width=1724&height=2064"
              alt="About Cognis"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="story"
        data-section-reveal
        className="w-full bg-[#f1ece8] px-[clamp(20px,4.2vw,80px)] py-[clamp(86px,8vw,152px)] text-[#322c2b]"
      >
        <div className="mx-auto flex w-full max-w-[1780px] flex-col gap-[clamp(44px,5.4vw,102px)]">
          <div className="grid gap-[clamp(38px,5vw,94px)] lg:grid-cols-[1fr_0.86fr] lg:items-start">
              <h2
                data-reveal-title
                className="text-left text-[clamp(40px,3.65vw,68px)] font-semibold leading-[1] tracking-[-0.055em] text-black"
              >
                Why it exists
              </h2>

              <div className="max-w-[650px] pt-[clamp(2px,0.5vw,10px)]">
                <h3
                  data-reveal-copy
                  className="text-[clamp(18px,1.2vw,22px)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#322c2b]"
                >
                  Most banks miss the moments that matter.
                </h3>
                <p
                  data-reveal-copy
                  className="mt-[22px] max-w-[500px] text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]"
                >
                  A salary credit lands at 2 AM and the customer gets a generic
                  notification at 10 AM. A balance dips below a threshold and
                  no one notices until the overdraft fee hits. An EMI is due
                  tomorrow and the reminder arrives next week.
                </p>
                <p
                  data-reveal-copy
                  className="mt-[14px] max-w-[500px] text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]"
                >
                  Cognis was built to close that gap. It picks up banking events
                  the instant they occur, understands what they mean for each
                  person, and responds with a context-aware action through the
                  right channel at the right time.
                </p>
              </div>
          </div>

          <div
            data-reveal-media
            className="relative h-[clamp(360px,48vw,760px)] w-full overflow-hidden bg-[#322c2b]"
          >
            <video
              src="https://framerusercontent.com/assets/psvBrlsgMu4ah0Q2L7HKs.mp4"
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </section>

      <section
        data-section-reveal
        className="w-full bg-[#f1ece8] px-[clamp(20px,4.2vw,80px)] pb-[clamp(92px,8vw,154px)] text-[#322c2b]"
      >
        <div className="mx-auto w-full max-w-[1780px]">
          <div className="flex max-w-[850px] flex-col gap-[clamp(18px,1.7vw,32px)]">
            <h2
              data-reveal-title
              className="text-left text-[clamp(40px,3.65vw,68px)] font-semibold leading-[1] tracking-[-0.055em] text-black"
            >
              How it works
            </h2>
            <p
              data-reveal-copy
              className="max-w-[500px] text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]"
            >
              A single event takes a fixed path through the Cognis pipeline:
              captured, understood, predicted, checked, decided, delivered,
              and learned from.
            </p>
          </div>

          <div className="mt-[clamp(44px,4.7vw,90px)] grid gap-5 lg:grid-cols-3">
            {scaleMetrics.map((metric) => {
              const isImage = metric.variant === "image";
              const isDark = metric.variant === "dark";
              const isLight = metric.variant === "light";

              return (
                <article
                  key={metric.title}
                  data-reveal-card
                  className={[
                    "relative flex min-h-[clamp(430px,42vw,620px)] overflow-hidden p-[clamp(24px,2.4vw,46px)]",
                    "flex-col justify-between",
                    isImage ? "bg-[#322c2b] text-[#f1ece8]" : "",
                    isDark ? "bg-[#322c2b] text-[#d1c5bc]" : "",
                    isLight ? "bg-[#d7cbc0] text-[#322c2b]" : "",
                  ].join(" ")}
                >
                  {isImage ? (
                    <>
                      <Image
                        src="https://framerusercontent.com/images/2qpStDD6T6cztASgu3NCzcU8U.png?width=1358&height=1636"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover object-center"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(50,44,43,0.32)_0%,rgba(50,44,43,0.08)_44%,rgba(50,44,43,0.5)_100%)]"
                      />
                    </>
                  ) : null}

                  {isDark ? (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_28%_22%,rgba(209,197,188,0.26),transparent_12%),radial-gradient(circle_at_72%_68%,rgba(130,115,103,0.34),transparent_18%),repeating-linear-gradient(0deg,rgba(241,236,232,0.06)_0_1px,transparent_1px_18px),repeating-linear-gradient(90deg,rgba(241,236,232,0.05)_0_1px,transparent_1px_18px)]"
                    />
                  ) : null}

                  {isLight ? (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_70%_18%,rgba(50,44,43,0.24),transparent_13%),radial-gradient(circle_at_28%_72%,rgba(130,115,103,0.24),transparent_19%),repeating-linear-gradient(135deg,rgba(50,44,43,0.08)_0_1px,transparent_1px_14px)]"
                    />
                  ) : null}

                  <div className="relative z-10 flex items-baseline gap-1">
                    <span
                      className={[
                        "text-[clamp(58px,5.2vw,96px)] font-normal leading-none tracking-[-0.08em]",
                        isImage ? "text-[#f1ece8]" : "text-[#695a57]",
                      ].join(" ")}
                    >
                      {metric.value}
                    </span>
                    <span
                      className={[
                        "text-[clamp(44px,4vw,72px)] font-normal leading-none tracking-[-0.06em]",
                        isImage ? "text-[#f1ece8]" : "text-[#695a57]",
                      ].join(" ")}
                    >
                      {metric.suffix}
                    </span>
                  </div>

                  <div className="relative z-10 max-w-[420px]">
                    <h3
                      className={[
                        "text-[clamp(18px,1.2vw,22px)] font-semibold leading-[1.12] tracking-[-0.035em]",
                        isImage || isDark ? "text-[#f1ece8]" : "text-[#322c2b]",
                      ].join(" ")}
                    >
                      {metric.title}
                    </h3>
                    <p
                      className={[
                        "mt-4 text-[16px] leading-[1.32] tracking-[-0.025em]",
                        isImage || isDark ? "text-[#d1c5bc]" : "text-[#4a4a4a]",
                      ].join(" ")}
                    >
                      {metric.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="Team"
        data-section-reveal
        className="w-full bg-[#f1ece8] px-[clamp(20px,2.1vw,40px)] pb-[clamp(94px,8vw,156px)] pt-[clamp(12px,1.6vw,30px)] text-[#322c2b]"
      >
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="grid gap-[clamp(28px,4vw,76px)] lg:grid-cols-[1fr_0.53fr] lg:items-start">
            <h2
              data-reveal-title
              className="text-left text-[clamp(40px,3.65vw,68px)] font-semibold leading-[1] tracking-[-0.055em] text-black"
            >
              The team
            </h2>
            <p
              data-reveal-copy
              className="max-w-[500px] pt-[clamp(2px,0.65vw,12px)] text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]"
            >
              Team Orbis, building Cognis for the SBI Hackathon at Global
              Fintech Festival 2026.
            </p>
          </div>

          <div className="mt-[clamp(58px,5vw,92px)] grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} data-reveal-card className="min-w-0">
                <div
                  data-reveal-media
                  className="relative aspect-[1.146/1] w-full overflow-hidden bg-[#322c2b]"
                >
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="pt-5">
                  <h3 className="text-[clamp(18px,1.2vw,22px)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#322c2b]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.32] tracking-[-0.025em] text-[#827367]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.32] tracking-[-0.02em] text-[#4a4a4a]">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
