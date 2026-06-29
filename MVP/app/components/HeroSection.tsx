import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-none flex-col items-center justify-center overflow-hidden bg-[#d7cbc0] p-0">
      <div className="grid h-full w-full overflow-hidden bg-[#322c2b] lg:grid-cols-2">
        <div className="relative min-h-[640px] overflow-hidden bg-[#d7cbc0]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0)_48%)]" />

          <div className="absolute left-[clamp(38px,3.16vw,60px)] top-[34.1vh] z-10 w-[calc(100%-clamp(76px,6.32vw,120px))] max-w-[830px]">
            <h1 className="[font-family:var(--font-mattone)] text-[clamp(78px,7.15vw,136px)] font-normal leading-none tracking-[-0.04em] text-black">
              Cognis
            </h1>

            <p className="mt-[clamp(22px,1.73vw,33px)] max-w-[660px] text-[clamp(15px,1.1vw,21px)] leading-[1.18] tracking-[-0.035em] text-[#4a4a4a]">
              An AI-powered execution agent designed to automate workflows,
              handle repetitive tasks, and deliver outcomes with minimal manual
              effort.
            </p>

            <div className="mt-[clamp(22px,1.63vw,31px)] h-px w-full bg-[#827367]" />

            <Link
              href="#demo"
              className="mt-[clamp(22px,1.63vw,31px)] inline-flex h-[clamp(52px,3.68vw,70px)] w-[clamp(224px,15.77vw,300px)] items-center justify-center rounded-[999px] bg-[#322c2b] px-8 text-[clamp(14px,0.95vw,18px)] font-semibold tracking-[-0.03em] text-[#d1c5bc] transition-colors hover:bg-[#241f1e] hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="relative min-h-[640px] overflow-hidden bg-[#2a2523]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(50,44,43,0.08),rgba(50,44,43,0.18))]" />
          <video
            src="https://framerusercontent.com/assets/XVdiNBG5uck0AsWaCzFaoLp9M.mp4"
            poster="https://framerusercontent.com/images/MTnMiw70xuQW40k3Zg7WFd4OVk.png?width=2194&height=2006"
            className="h-full w-full object-cover object-[50%_50%]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-40 w-1/2 bg-[linear-gradient(180deg,rgba(215,203,192,0)_0%,rgba(226,217,209,0.64)_45%,#f1ece8_100%)]" />
    </section>
  );
}
