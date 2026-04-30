"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Shield, RefreshCcw, Lock, Globe, Zap } from "lucide-react";

const perks = [
  {
    title: "IA Propia",
    desc: "Tecnología propietaria de grado industrial.",
    icon: Code2
  },
  {
    title: "Soporte 360",
    desc: "Acompañamiento legal y técnico continuo.",
    icon: Shield
  },
  {
    title: "Actualización",
    desc: "Evolución constante de algoritmos.",
    icon: RefreshCcw
  },
  {
    title: "Exclusividad",
    desc: "Protección territorial garantizada.",
    icon: Lock
  },
  {
    title: "Autoridad",
    desc: "Marca global con reputación disruptiva.",
    icon: Globe
  },
  {
    title: "Rapidez",
    desc: "Implementación en tiempo récord.",
    icon: Zap
  }
];

export function CompetitiveAdvantage() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#001226]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-electric font-black uppercase tracking-[0.2em] text-[10px] mb-4">Ventaja Estratégica</div>
            <h2 className="text-2xl md:text-5xl font-black text-white leading-tight uppercase italic break-words pr-10 overflow-visible">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">Diferencial</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, borderColor: "rgba(32,236,252,0.2)" }}
              className="p-6 md:p-10 rounded-[1.2rem] md:rounded-[2rem] border border-white/5 bg-white/[0.03] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                <perk.icon size={80} />
              </div>
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6 border border-electric/20 group-hover:bg-electric group-hover:text-black transition-all">
                <perk.icon size={20} />
              </div>
              
              <h3 className="text-sm md:text-xl font-black text-white mb-2 uppercase italic tracking-tight">{perk.title}</h3>
              <p className="text-[10px] md:text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors line-clamp-2">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
