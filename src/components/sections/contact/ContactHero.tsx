"use client";

import React from "react";
import { motion } from "framer-motion";
import MagicRings from "@/components/ui/MagicRings";

export function ContactHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-12 bg-transparent border-b border-white/5 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#20ecfc"
          colorTwo="#1E40AF"
          ringCount={5}
          speed={0.8}
          attenuation={15}
          lineThickness={1.5}
          baseRadius={0.4}
          radiusStep={0.15}
          scaleRate={0.08}
          opacity={0.2}
          blur={0}
          noiseAmount={0.05}
          rotation={0}
          ringGap={2}
          fadeIn={0.5}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.1}
          hoverScale={1.1}
          parallax={0.02}
          clickBurst={true}
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-md shadow-sm">
            <span>Contacto Directo</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase italic mb-6 pr-10 overflow-visible">
            Hablemos sobre el <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-600">
              futuro de tu empresa
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestro equipo de especialistas está listo para analizar sus operaciones y diseñar una estrategia de Inteligencia Artificial que lo posicione como líder de su sector.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
