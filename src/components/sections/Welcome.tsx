import React from "react";

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="
        relative w-full bg-black text-white overflow-hidden
        flex items-center justify-center
        min-h-screen min-h-[100svh]
      "
    >
      {/* subtle glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        {/* scale blobs down on small screens */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[340px] w-[340px] sm:h-[520px] sm:w-[520px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-white/10 blur-3xl
          "
        />
        <div
          className="
            absolute left-[10%] top-[18%]
            h-[240px] w-[240px] sm:h-[380px] sm:w-[380px]
            rounded-full bg-white/5 blur-3xl
          "
        />
        <div
          className="
            absolute right-[8%] bottom-[14%]
            h-[260px] w-[260px] sm:h-[420px] sm:w-[420px]
            rounded-full bg-white/5 blur-3xl
          "
        />

        {/* vignette to keep edges dark */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        {/* Huge glowing headline */}
        <h1
          className="
            relative mx-auto font-extrabold tracking-tight
            leading-[1.05] sm:leading-[1.05]
            text-[clamp(2.2rem,8vw,5rem)]
            md:text-8xl
          "
        >
          <span className="text-white [text-wrap:balance]">
            Welcome to My Portfolio
          </span>

          {/* extra glow layer */}
          <span className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-40">
            <span className="text-white">Welcome to My Portfolio</span>
          </span>
        </h1>

        {/* subtitle line */}
        <p
          className="
            mt-4 sm:mt-6
            text-sm sm:text-lg md:text-xl
            text-white/80 leading-relaxed
          "
        >
          I&apos;m{" "}
          <span className="text-white font-semibold">sulakshan kalugamage</span>{" "}
          —{" "}
          <span className="text-white/90 font-semibold">SOFTWARE ENGINEER</span>
        </p>

        {/* small divider + scroll cue */}
        <div className="mt-7 sm:mt-10 flex flex-col items-center gap-3">
          <div className="h-px w-20 sm:w-28 bg-white/15" />

          {/* hide scroll indicator on super small screens */}
          <div className="hidden xs:flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/15 bg-white/5 backdrop-blur flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m0 0 6-6m-6 6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* if you don't have `xs:` in your Tailwind config, remove the `hidden xs:flex`
              and use `hidden sm:flex` instead */}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
