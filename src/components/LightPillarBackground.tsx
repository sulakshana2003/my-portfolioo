import React, { type ReactNode } from "react";
import LightPillar from "./LightPillar.jsx"; // <-- adjust path to your file

type Props = {
  children: ReactNode;
  className?: string;
  height?: number; // background visible height in px
};

export default function LightPillarBackground({
  children,
  className = "",
  height = 850,
}: Props) {
  return (
    <div
      className={`relative min-h-screen w-full bg-black text-white ${className}`}
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Centered pillar area */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl"
          style={{ height }}
        >
          <LightPillar
            topColor="#ffffff"
            bottomColor="#ffffff"
            intensity={0.9}
            rotationSpeed={0.25}
            glowAmount={0.006}
            pillarWidth={3.2}
            pillarHeight={0.45}
            noiseIntensity={0.35}
            pillarRotation={0}
            interactive={false}
            mixBlendMode="screen"
          />
        </div>

        {/* Optional: subtle fade so it blends into black */}
        <div className="absolute inset-x-0 top-0 h-[900px] bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
