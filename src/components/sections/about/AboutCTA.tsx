"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#001226] overflow-hidden">
      {/* Background Impact */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,236,252,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic text-white break-words pr-10 overflow-visible">
            El futuro no espera. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">Lidera la revolución</span>
          </h2>

          <p className="text-sm md:text-xl text-white/70 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Las plazas para socios estratégicos son limitadas. Asegure su lugar en la red global de innovación más rentable del mercado.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-electric text-black px-12 py-5 rounded-sm font-black text-lg uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_40px_rgba(32,236,252,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Aplicar ahora
              <ArrowUpRight size={26} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.01] uppercase select-none pointer-events-none whitespace-nowrap italic">
        LABS 24K GLOBAL
      </div>
    </section>
  );
}
