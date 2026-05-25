"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{

        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: ["#22d3ee", "#a855f7", "#ec4899"],
          },

          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
          },

          number: {
            value: 55,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 4 },
          },

        },

        detectRetina: true,

      }}

    />

  );
}