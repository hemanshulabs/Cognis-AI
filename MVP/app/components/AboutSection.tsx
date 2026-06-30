export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#f1ece8] px-5 pb-[150px] pt-[190px] text-[#322c2b]"
    >
      <div className="mx-auto flex w-full max-w-[1620px] flex-col items-start">
        <h2 className="text-left text-[clamp(40px,3.65vw,68px)] font-semibold leading-[1] tracking-[-0.055em] text-black">
          Real-Time Engagement
        </h2>

        <p className="mt-[22px] max-w-[500px] text-left text-[16px] leading-[1.32] tracking-[-0.025em] text-[#4a4a4a]">
          Cognis turns raw banking activity into useful digital engagement. It
          watches transactions, balances, and app behavior, recognizes what is
          happening in a customer&apos;s financial life, and responds with an action
          that fits the moment.
        </p>
      </div>

      <div className="mt-[72px] h-[clamp(320px,35vw,560px)] w-full max-w-[1620px] overflow-hidden rounded-none bg-[#322c2b]">
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
