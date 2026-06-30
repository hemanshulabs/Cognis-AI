"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    id: "01",
    label: "Sensis",
    title: "Sensis",
    description:
      "Catches every transaction, login, and balance change the moment it happens, and passes it to Cognis.",
    image:
      "https://framerusercontent.com/images/Zwny8yIEU5A50O87WI1lESCLs.jpg?width=749&height=1402",
    items: [
      ["Event ingestion", "HTTP, app, and core banking events"],
      ["Stream validation", "Schema checks before handoff"],
      ["Money moments", "Transactions, logins, balance changes"],
      ["Reports to Cognis", "First signal in the pipeline"],
    ],
  },
  {
    id: "02",
    label: "Memoris",
    title: "Memoris",
    description:
      "Holds a single, living profile for each customer: balance, spending patterns, salary history, and derived traits.",
    image:
      "https://framerusercontent.com/images/XgHJUfVkDQ8l7dlse3Ydn8mlww.jpg?width=736&height=1308",
    items: [
      ["Customer 360", "One profile per customer"],
      ["Identity & history", "Balance, spend, salary, activity"],
      ["Derived metrics", "Spend 30d, streaks, stress score"],
      ["Context handoff", "Feeds Auguris with memory"],
    ],
  },
  {
    id: "03",
    label: "Auguris",
    title: "Auguris",
    description:
      "Reads behavioural signals to forecast churn risk, offer propensity, and financial stress before they surface.",
    image:
      "https://framerusercontent.com/images/axQ7KvT5PP5hUycMWkmcsyV9U.jpg?width=736&height=1308",
    items: [
      ["Churn forecast", "Predicts drop-off risk"],
      ["Propensity score", "Ranks offer relevance"],
      ["Stress signal", "Finds financial pressure"],
      ["Model output", "Sends scores to Lexis"],
    ],
  },
  {
    id: "04",
    label: "Lexis",
    title: "Lexis",
    description:
      "Checks eligibility, consent, frequency caps, and regulatory guardrails so nothing reaches a customer it shouldn't.",
    image:
      "https://framerusercontent.com/images/ks3L0w2MpaU37xMsn3uC0B4kLM.jpg?width=736&height=1308",
    items: [
      ["Eligibility", "Checks who can receive what"],
      ["Frequency caps", "Prevents over-messaging"],
      ["Compliance", "Keeps SBI/RBI guardrails first"],
      ["Filtered actions", "Only safe choices continue"],
    ],
  },
  {
    id: "05",
    label: "Arbis",
    title: "Arbis",
    description:
      "Weighs model scores against business value and customer need to pick the single best next action.",
    image:
      "https://framerusercontent.com/images/j8vwdDXoVsAJD2Rgf6u5D9CVk.png?width=1051&height=1496",
    items: [
      ["Action ranking", "Compares all valid options"],
      ["Value balance", "Customer need plus business value"],
      ["Final decision", "Chooses one next best action"],
      ["Reasoning", "Explains why it picked it"],
    ],
  },
  {
    id: "06",
    label: "Nuntis",
    title: "Nuntis",
    description:
      "Carries the chosen message to the right channel at the right moment, with delivery status tracked.",
    image:
      "https://framerusercontent.com/images/Zwny8yIEU5A50O87WI1lESCLs.jpg?width=749&height=1402",
    items: [
      ["Channel choice", "App, email, SMS, or CRM"],
      ["Message delivery", "Sends the approved action"],
      ["Timing", "Reaches the customer at the right moment"],
      ["Delivery log", "Records status for Vigilis"],
    ],
  },
  {
    id: "07",
    label: "Vigilis",
    title: "Vigilis",
    description:
      "Watches what happens after delivery and feeds the result back so every future decision is sharper than the last.",
    image:
      "https://framerusercontent.com/images/XgHJUfVkDQ8l7dlse3Ydn8mlww.jpg?width=736&height=1308",
    items: [
      ["Outcome watch", "Open, act, ignore, convert"],
      ["Audit trail", "Checks decisions after delivery"],
      ["Feedback loop", "Feeds learning back to Cognis"],
      ["Sharper calls", "Improves the next decision"],
    ],
  },
] as const;

function FeatureVisual({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <div className="relative h-[410px] overflow-hidden rounded-[4px] bg-[#8f8176] max-md:h-[340px]">
      <Image
        src={feature.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 420px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#322c2b]/5" />

      {index === 4 ? (
        <div className="absolute inset-x-[17%] top-[18%] grid gap-3">
          {feature.items.map(([title, status], itemIndex) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-[8px] bg-[#f1ece8] p-4 shadow-[0_16px_50px_rgba(50,44,43,0.12)]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[4px] bg-white text-[15px] font-semibold text-[#827367]">
                {itemIndex + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold leading-none tracking-[-0.04em] text-[#695a57]">
                  {title}
                </p>
                <p className="mt-2 text-[13px] leading-[1.05] tracking-[-0.035em] text-[#827367]">
                  {status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : index === 2 ? (
        <div className="absolute inset-x-[17%] top-[18%]">
          <div className="rounded-[8px] bg-white p-4 shadow-[0_18px_60px_rgba(50,44,43,0.16)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-[4px] bg-[#f1ece8] text-[13px] text-[#827367]">
                  doc
                </span>
                <p className="text-[14px] font-medium leading-none tracking-[-0.035em] text-[#695a57]">
                  {feature.items[0][0]}
                </p>
              </div>
              <span className="text-[12px] font-medium text-[#d1c5bc]">
                {feature.items[0][1]}
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-[8px] bg-[#d1c5bc] p-5 shadow-[0_18px_60px_rgba(50,44,43,0.16)]">
            <p className="text-[13px] font-semibold leading-none tracking-[-0.03em] text-[#827367]">
              {feature.items[1][0]}
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-none tracking-[-0.035em] text-[#695a57]">
              Found {feature.items[1][1]}
            </p>
            <div className="mt-8 grid grid-cols-4 gap-2">
              <span className="h-2 rounded-[2px] bg-white" />
              <span className="h-2 rounded-[2px] bg-white" />
              <span className="h-2 rounded-[2px] bg-white" />
              <span className="h-2 rounded-[2px] bg-white" />
            </div>
            <div className="mt-7 rounded-[4px] bg-[#322c2b] py-3 text-center text-[13px] font-semibold leading-none tracking-[-0.03em] text-white">
              Review
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-[17%] top-[17%] grid gap-3">
          {feature.items.map(([title, status], itemIndex) => (
            <div
              key={title}
              className={`flex items-center justify-between gap-4 rounded-[8px] p-3 shadow-[0_16px_50px_rgba(50,44,43,0.12)] ${
                itemIndex > 1 ? "bg-[#f1ece8]" : "bg-white"
              }`}
            >
              <div className="flex min-w-0 items-center gap-4">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-[4px] text-[14px] font-semibold ${
                    itemIndex === 2
                      ? "bg-[#322c2b] text-[#f1ece8]"
                      : "bg-[#d1c5bc] text-[#827367]"
                  }`}
                >
                  {index === 1 ? itemIndex + 1 : itemIndex === 2 ? "C" : "A"}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold leading-none tracking-[-0.035em] text-[#695a57]">
                    {title}
                  </p>
                  <p className="mt-2 text-[12px] font-medium leading-none tracking-[-0.03em] text-[#827367]">
                    {status}
                  </p>
                </div>
              </div>
              <span className="h-3 w-3 shrink-0 rounded-full border border-[#827367]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveFeature(visibleEntry.target.id.replace("feature-", ""));
        }
      },
      {
        rootMargin: "-28% 0px -44% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    features.forEach((feature) => {
      const element = document.getElementById(`feature-${feature.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      data-section-reveal
      className="bg-[#f1ece8] px-5 pb-[110px] pt-[104px] text-[#322c2b]"
    >
      <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[minmax(0,870px)_760px] lg:gap-[30px]">
        <div className="lg:sticky lg:top-[112px] lg:h-[calc(100vh-112px)]">
          <h2
            data-reveal-title
            className="[font-family:var(--font-mattone)] text-[clamp(44px,4.3vw,78px)] font-normal leading-[0.98] tracking-[-0.055em] text-black"
          >
            Sub-Agents
          </h2>
          <p
            data-reveal-copy
            className="mt-6 max-w-[560px] text-[clamp(15px,0.98vw,18px)] leading-[1.28] tracking-[-0.03em] text-[#827367]"
          >
            Cognis is the parent orchestrator. Each specialist child agent
            handles one job in the pipeline, from catching the event,
            through prediction, compliance, and decision, to delivery and
            learning.
          </p>

          <nav
            className="mt-[92px] hidden space-y-8 lg:block"
            aria-label="Feature list"
          >
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              return (
                <a
                  key={feature.id}
                  href={`#feature-${feature.id}`}
                  className={`flex items-center gap-4 text-[22px] font-semibold leading-none tracking-[-0.045em] transition-colors ${
                    isActive ? "text-[#322c2b]" : "text-[#d1c5bc]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`h-[7px] w-[7px] transition-colors ${
                      isActive ? "bg-[#322c2b]" : "bg-[#d1c5bc]"
                    }`}
                  />
                  {feature.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="grid gap-[14px] lg:pt-[226px]">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              id={`feature-${feature.id}`}
              data-reveal-card
              className="grid scroll-mt-36 overflow-hidden rounded-[4px] bg-white p-[10px] md:grid-cols-[minmax(0,1fr)_330px] lg:grid-cols-[370px_370px]"
            >
              <div className="flex min-h-[410px] flex-col p-6 md:p-[16px_16px_28px_16px] lg:p-[20px_16px_28px_16px]">
                <h3 className="max-w-[320px] [font-family:var(--font-geist-sans)] text-[24px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#322c2b]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-[300px] text-[16px] leading-[1.26] tracking-[-0.03em] text-[#827367]">
                  {feature.description}
                </p>
              </div>

              <FeatureVisual feature={feature} index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
