export function AboutSection() {
  return (
    <section
      id="about"
      data-section-reveal
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#f1ece8] px-5 pb-[150px] pt-[190px] text-[#322c2b]"
    >
      <div className="mx-auto flex w-full max-w-[1620px] flex-col items-start">
        <h2
          data-reveal-title
          className="text-left text-[clamp(40px,3.65vw,68px)] font-semibold leading-[1] tracking-[-0.055em] text-black"
        >
          Real-Time Engagement
        </h2>

        <p
          data-reveal-copy
          className="mt-[22px] max-w-[500px] text-left text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]"
        >
          A salary credit lands. A balance dips below a threshold. An EMI is
          due tomorrow. These are the moments that shape a customer&apos;s
          financial life, and most banks miss them by hours, or days.
          Cognis catches them as they happen, understands what they mean for
          each person, and responds with something genuinely useful, right when
          it matters.
        </p>
      </div>

      <div
        data-reveal-media
        className="mt-[72px] h-[clamp(320px,35vw,560px)] w-full max-w-[1620px] overflow-hidden rounded-none bg-[#322c2b]"
      >
        <video
          src="https://framerusercontent.com/assets/orme2FdbfcuJGSuDFxaYBSEfE.mp4"
          poster="https://framerusercontent.com/images/Dqb9CVeUkK06qbMyRAYbiWhVuoQ.png?width=2872&height=1278"
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
