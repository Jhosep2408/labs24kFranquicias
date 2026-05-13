"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Hyperspeed from "../ui/Hyperspeed";

const stats = [
  { value: "+200", label: "Ingenieros Expertos", detail: "Elite Global" },
  { value: "+500", label: "Implementaciones", detail: "Éxito Probado" },
  { value: "GLOBAL", label: "Presencia Inmediata", detail: "+40 Países" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24 pb-8 overflow-hidden bg-[#000000]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Top Split Layout - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-electric/20 bg-electric/5 backdrop-blur-sm text-electric text-[9px] font-black uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(32,236,252,0.1)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-electric"></span>
              </span>
              Socio Fundador 2026
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-tighter uppercase font-heading italic">
              No estás comprando una franquicia. <br />
              <span className="text-electric drop-shadow-[0_0_25px_rgba(32,236,252,0.3)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Estás reservando tu lugar en la historia</span> <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl">tecnológica de tu ciudad.</span>
            </h1>

            <p className="mt-4 text-sm md:text-lg text-white/70 max-w-xl font-light leading-relaxed tracking-wide">
              <strong className="text-white">Labs24k es la primera red física de Centros de Inteligencia Artificial.</strong> La misma oportunidad que las Telecomunicaciones en los 90, pero con el poder de la IA.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <motion.button
                onClick={() => window.location.href = '#expansion'}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(32,236,252,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-electric text-black px-8 py-4 rounded-sm font-black text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
              >
                Ver Disponibilidad en mi Código Postal
                <ArrowRight size={18} />
              </motion.button>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-white/60 text-xs md:text-sm italic font-bold">
                  12 Zonas reservadas en los últimos 30 días.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Elegant Corporate Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-end"
          >
            <div className="relative p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden group max-w-sm">
              {/* Card Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 blur-[60px] rounded-full group-hover:bg-electric/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-electric text-[9px] font-black uppercase tracking-[0.3em] mb-4">
                  <div className="w-8 h-[1px] bg-electric/50" />
                  Músculo Técnico de Elite
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight uppercase tracking-tight italic">
                  200 Ingenieros <br /> <span className="text-electric-cyan">A Tu Servicio</span>
                </h3>

                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-light">
                  Tu ventaja competitiva es nuestra capacidad de ejecución. La central garantiza el desarrollo, despliegue y soporte de cada proyecto. Tú pones la visión; nosotros el código.
                </p>

                {/* Stats Indicators Inside Card Foot */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <div className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-electric text-[7px] font-black uppercase tracking-widest leading-none opacity-80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Floating Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric/10 to-deep-blue/10 blur-2xl -z-10 opacity-30" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explorar</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
