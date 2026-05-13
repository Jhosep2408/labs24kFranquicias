"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  const scrollToContact = () => {
    document.getElementById("expansion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-40 px-6 md:px-12 bg-[#000311] overflow-hidden">
      {/* Background Impact */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,236,252,0.1),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black mb-8 md:mb-12 leading-[1.2] md:leading-[0.95] tracking-tight md:tracking-tighter uppercase font-heading italic">
            Nosotros ponemos la ingeniería. <br />
            <span className="text-electric">Tú pones la visión.</span>
          </h2>

          <p className="text-base md:text-xl text-white/70 mb-10 md:mb-16 max-w-3xl mx-auto font-light px-4 leading-relaxed">
            Recibe tu agencia de IA y Desarrollo con todo el material de papelería, acceso a contratos públicos, formación constante y sistemas listos para facturar a cualquier nivel desde el primer día.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(32,236,252,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-electric text-black px-8 md:px-12 py-5 md:py-7 rounded-sm font-black text-lg md:text-2xl uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_30px_rgba(32,236,252,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Descargar Dossier Informativo
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Floating Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] uppercase select-none pointer-events-none whitespace-nowrap">
        LABS 24K GLOBAL
      </div>
    </section>
  );
}
