export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#f1ece8] px-5 pb-[120px] pt-[170px] text-[#322c2b]"
    >
      <div className="mx-auto flex w-full max-w-[1620px] flex-col items-start">
        <h2 className="text-left text-[clamp(56px,4.8vw,92px)] font-semibold leading-[0.96] tracking-[-0.07em] text-black">
          Workflow Engine
        </h2>

        <p className="mt-[26px] max-w-[505px] text-left text-[18px] leading-[1.22] tracking-[-0.035em] text-[#4a4a4a]">
          Cognis is an intelligent AI agent designed to take over repetitive
          and time-consuming tasks. From organizing information to executing
          workflows, it works like a digital teammate that helps you stay
          focused on what matters.
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
