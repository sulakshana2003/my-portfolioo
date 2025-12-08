// src/components/sections/Hero.tsx
import { profile } from "../../data/profile";
import Ballpit from "../Ballpit";
import DecayCard from "../DecayCard"; // <-- import it here

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Ballpit Background */}
      <div className="absolute inset-0">
        <Ballpit
          count={100}
          gravity={0.1}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="section-container w-full flex justify-between items-center">

          {/* LEFT — Text Content */}
          <div className="max-w-3xl space-y-6">
            <p className="text-sky-400 font-medium tracking-wide text-sm sm:text-base uppercase">
              Software Engineering Undergraduate
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {profile.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium">
              {profile.title}
            </p>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-sky-500 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href="/sulakshana-cv.pdf"
                className="px-6 py-3 rounded-full border border-slate-500/60 text-slate-200 font-medium text-sm sm:text-base backdrop-blur-md hover:border-sky-300 hover:text-sky-200 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT — Decay Card */}
          <div className="hidden md:block"> 
            <DecayCard
              width={220}
              height={320}
              image="https://picsum.photos/300/400?grayscale" // replace with your photo URL
            >
              <h2 className="text-white text-xl font-bold">
                {/* Optional title inside card */}
              </h2>
            </DecayCard>
          </div>

        </div>
      </div>
    </div>
  );
};

export { Hero };
