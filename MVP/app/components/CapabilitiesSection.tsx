import Image from "next/image";
import { TypingAnimation } from "./ui/TypingAnimation";
import { SpotlightCard } from "./ui/aceternity";

const capabilities = [
  {
    number: "01",
    title: "Ingest",
    description: "Picks up transactions, logins, and balance changes the moment they occur.",
    image:
      "https://framerusercontent.com/images/Oae2ZGeAvKmGWTc7EAYDghMD4.png?width=1094&height=1260",
    tag: "[Cognis Event]",
    output:
      "> receives salary credit - validates schema - streams event - updates customer timeline",
  },
  {
    number: "02",
    title: "Detect",
    description: "Spots salary changes, low-balance streaks, and shifts in spending behaviour.",
    image:
      "https://framerusercontent.com/images/T6goombZJEFI67hjbR2oFj8RT98.png?width=998&height=1254",
    tag: "Processing",
    output: "Computing financial signals.",
  },
  {
    number: "03",
    title: "Decide",
    description: "Ranks the next best action using customer context, rules, and model scores.",
    image: null,
    tag: "> Decisioning...",
    output: "NBA Scoring",
  },
  {
    number: "04",
    title: "Engage",
    description: "Delivers the chosen action through app, email, SMS, or CRM and tracks the result.",
    image:
      "https://framerusercontent.com/images/WqJYmUMy6IArBxuG8vecDssbX4.png?width=6314&height=8355",
    tag: "[CUSTOMER MOMENT]",
    output: "Action delivered with reason, channel, and outcome tracked",
  },
] as const;

function CapabilityMock({
  tag,
  output,
  variant,
}: {
  tag: string;
  output: string;
  variant: number;
}) {
  if (variant === 1) {
    return (
      <div className="absolute left-[17%] top-[34%] max-w-[270px] text-[#f1ece8]">
        <div className="mb-5 h-3 w-3 bg-[#f1ece8]" />
        <div className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.04em]">
          <span className="h-2 w-2 rounded-full bg-[#f1ece8]" />
          <span>{tag}</span>
        </div>
        <TypingAnimation
          as="p"
          className="mt-4 text-[17px] font-medium leading-[1.04] tracking-[-0.04em] text-[#d1c5bc]"
          typeSpeed={88}
          deleteSpeed={60}
          pauseDelay={1700}
          loop
          cursorStyle="block"
        >
          {output}
        </TypingAnimation>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="absolute left-[17%] right-[17%] top-[18%] space-y-3">
        <div className="rounded-[10px] bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
          <p className="mb-4 text-[13px] text-[#827367]">Task In Progress</p>
          {["Validate event", "Update profile", "Score actions", "Deliver message"].map(
            (item, index) => (
              <div key={item} className="mt-4 flex items-center gap-3">
                <span
                  className={`workflow-step-dot workflow-step-dot-${index} grid h-7 w-7 place-items-center rounded-full text-[10px]`}
                >
                  {index < 2 ? "✓" : index === 2 ? "↻" : "○"}
                </span>
                <span
                  className={`workflow-step-text workflow-step-text-${index} text-[13px]`}
                >
                  {item}
                </span>
              </div>
            )
          )}
        </div>
        <div className="rounded-[10px] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded bg-[#f1ece8] text-[#827367]">⌘</span>
              <div>
                <TypingAnimation
                  as="p"
                  className="text-[20px] leading-none text-[#827367]"
                  typeSpeed={100}
                  deleteSpeed={68}
                  pauseDelay={1600}
                  loop
                  cursorStyle="line"
                >
                  {tag}
                </TypingAnimation>
                <TypingAnimation
                  as="p"
                  className="mt-1 max-w-[112px] text-[12px] leading-[1.05] text-[#d1c5bc]"
                  typeSpeed={96}
                  deleteSpeed={64}
                  pauseDelay={1600}
                  loop
                  cursorStyle="line"
                >
                  {output}
                </TypingAnimation>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#695a57]">
              <span className="h-2 w-2 rounded-full bg-[#827367]" /> LIVE
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className="absolute left-1/2 top-[24%] w-[64%] -translate-x-1/2 space-y-px">
        <div className="rounded-t-[10px] bg-white p-4">
          <div className="flex items-center gap-4 text-[18px] text-[#827367]">
            <span className="grid h-10 w-10 place-items-center rounded bg-[#f1ece8] text-[#827367]">⌘</span>
            <TypingAnimation
              as="span"
              typeSpeed={96}
              deleteSpeed={68}
              pauseDelay={1600}
              loop
              cursorStyle="block"
            >
              {tag}
            </TypingAnimation>
          </div>
        </div>
        <div className="rounded-b-[10px] bg-[#f1ece8] p-4">
          <p className="mb-7 text-[13px] text-[#827367]">{output}...</p>
          <div className="space-y-2">
            <div className="skeleton-sheen h-2 w-[72%] rounded bg-white" />
            <div className="skeleton-sheen h-2 w-[40%] rounded bg-white" />
            <div className="skeleton-sheen h-2 w-[56%] rounded bg-white" />
          </div>
          <div className="mt-8 grid h-9 place-items-center rounded bg-[#322c2b]">
            <span className="loader-ring h-5 w-5 rounded-full border-2 border-[#f1ece8]/35 border-t-[#f1ece8]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-[17%] top-[22%] max-w-[300px] space-y-[88px] text-[#f1ece8]">
      <div>
        <div className="mb-5 h-3 w-3 bg-[#f1ece8]" />
        <div className="flex items-center gap-2 text-[16px] font-semibold">
          <span className="h-2 w-2 rounded-full bg-[#f1ece8]" />
          {tag}
        </div>
        <TypingAnimation
          as="p"
          className="mt-4 text-[17px] font-medium leading-[1.1] text-[#f1ece8]"
          typeSpeed={92}
          deleteSpeed={64}
          pauseDelay={1600}
          loop
          cursorStyle="block"
        >
          checks eligibility and frequency caps
        </TypingAnimation>
      </div>
      <div>
        <div className="mb-5 h-3 w-3 bg-[#f1ece8]" />
        <div className="flex items-center gap-2 text-[16px] font-semibold">
          <span className="h-2 w-2 rounded-full bg-[#f1ece8]" />
          [OUTPUT]
        </div>
        <TypingAnimation
          as="p"
          className="mt-4 text-[17px] font-medium leading-[1.1] text-[#f1ece8]"
          typeSpeed={88}
          deleteSpeed={60}
          pauseDelay={1600}
          loop
          cursorStyle="block"
        >
          {output}
        </TypingAnimation>
      </div>
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      data-section-reveal
      className="bg-[#f1ece8] px-5 pb-[180px] pt-[100px]"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_600px]">
          <h2
            data-reveal-title
            className="max-w-[700px] text-left [font-family:var(--font-mattone)] text-[clamp(38px,3.35vw,62px)] font-normal leading-[1] tracking-[-0.04em] text-black"
          >
            Core Capabilities
          </h2>
          <p
            data-reveal-copy
            className="max-w-[480px] justify-self-start text-left text-[17px] leading-[1.26] tracking-[-0.025em] text-[#4a4a4a] lg:justify-self-end"
          >
            Cognis follows the full event-to-engagement loop: catch the
            moment, understand the customer, pick the right action, deliver
            it, and learn from what happens next.
          </p>
        </div>

        <div className="mt-[102px] grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <SpotlightCard key={item.number} data-reveal-card className="min-w-0">
              <div className="relative aspect-[0.868] overflow-hidden bg-[#8f8176]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 342px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/5" />
                <CapabilityMock tag={item.tag} output={item.output} variant={index + 1} />
              </div>

              <div className="mt-[23px] text-[#322c2b]">
                <p className="text-[16px] leading-none tracking-[-0.03em] text-[#4a4a4a]">
                  {item.number}
                </p>
                <div className="mt-[16px] h-px w-full bg-[#c6b8ae]" />
                <h3 className="mt-[18px] [font-family:var(--font-mattone)] text-[22px] font-normal leading-none tracking-[-0.04em] text-black">
                  {item.title}
                </h3>
                <p className="mt-[14px] max-w-[280px] text-[15px] leading-[1.28] tracking-[-0.025em] text-[#4a4a4a]">
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
