import {
  Clock3,
  DraftingCompass,
  PanelsTopLeft,
  PencilLine,
  Sparkles,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";

const impactItems = [
  {
    title: "Catches Moments As They Happen",
    description: "A payment clears, a balance dips, a salary lands. Cognis picks it up the instant it occurs.",
    Icon: Clock3,
  },
  {
    title: "One Profile, Not Five Dashboards",
    description: "Each customer's balance, spending, and history stay in a single, always-current view.",
    Icon: DraftingCompass,
  },
  {
    title: "Spots the Patterns That Matter",
    description: "How much someone spent this month, how long a balance has stayed low, or when a salary changed.",
    Icon: ZapIcon,
  },
  {
    title: "Built Around Real Moments",
    description: "When a raise lands or a month turns tight, the response fits the moment rather than a fixed schedule.",
    Icon: PencilLine,
  },
  {
    title: "Compliance Comes First",
    description: "Nothing reaches a customer until eligibility, consent, and frequency caps have been checked.",
    Icon: Sparkles,
  },
  {
    title: "Learns From Every Outcome",
    description: "Each response sharpens the next decision. Open, click, ignore, or convert feeds back into the system.",
    Icon: PanelsTopLeft,
  },
] as const;

function ImpactIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[4px] bg-[#dbd0c8] text-[#322c2b]">
      <Icon aria-hidden="true" strokeWidth={2.25} className="h-[30px] w-[30px]" />
    </span>
  );
}

export function ImpactSection() {
  return (
    <section
      data-section-reveal
      className="bg-[#f1ece8] px-[clamp(28px,2.65vw,51px)] pb-[150px] pt-[104px] text-[#322c2b]"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2
            data-reveal-title
            className="[font-family:var(--font-geist-sans)] text-[clamp(46px,4vw,76px)] font-medium leading-[0.98] tracking-[-0.065em] text-black"
          >
            How It Works
          </h2>
          <p
            data-reveal-copy
            className="mx-auto mt-5 max-w-[590px] text-[clamp(16px,0.92vw,18px)] leading-[1.12] tracking-[-0.025em] text-[#4a4a4a]"
          >
            From the moment an event lands to the message that goes back out,
            here is what Cognis actually does at each step.
          </p>
        </div>

        <div className="mt-[78px] grid gap-x-[clamp(70px,10vw,190px)] gap-y-[72px] md:grid-cols-2 xl:grid-cols-3">
          {impactItems.map((item) => (
            <article
              key={item.title}
              data-reveal-card
              className="flex min-w-0 items-start gap-5"
            >
              <ImpactIcon Icon={item.Icon} />
              <div className="min-w-0 pt-[5px]">
                <h3 className="text-[clamp(16px,0.9vw,19px)] font-medium leading-[1.15] tracking-[-0.02em] text-black">
                  {item.title}
                </h3>
                <p className="mt-[11px] max-w-[285px] text-[clamp(15px,0.88vw,17px)] leading-[1.16] tracking-[-0.025em] text-[#4a4a4a]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
