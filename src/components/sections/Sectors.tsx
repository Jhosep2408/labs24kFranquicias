"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Factory, Landmark, CheckCircle2 } from "lucide-react";

const sectors = [
  {
    title: "Consultoría de Éxito",
    icon: <Briefcase size={32} />,
    description: "Modelos de consultoría estratégica que transforman la operativa de PYMES con IA propietaria.",
    benefits: [
      "Nicho de Alta Rentabilidad",
      "Sistemas de Gestión Elite",
      "Optimización de ROI Proyectado"
    ],
    delay: 0.1
  },
  {
    title: "Sistemas Operativos 4.0",
    icon: <Factory size={32} />,
    description: "Digitalización de alto nivel para nichos industriales desatendidos.",
    benefits: [
      "Automatización de Grado Militar",
      "Reducción de Costes Críticos",
      "Escalabilidad Global Llave en Mano"
    ],
    delay: 0.2
  },
  {
    title: "Marketing Disruptivo",
    icon: <Landmark size={32} />,
    description: "Estrategias de crecimiento acelerado basadas en algoritmos de diseño personalizado.",
    benefits: [
      "Autoridad de Marca Instantánea",
      "Adquisición de Clientes Elite",
      "Ecosistema de Ventas 24/7"
    ],
    delay: 0.3
  }
];

export function Sectors() {
  return (
    <section id="sectores" className="py-20 md:py-32 px-6 md:px-12 bg-[#000311]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-electric font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4">Oportunidades de Socio</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic font-heading leading-[1.1]">
              Nichos de <span className="text-electric">Alta Oportunidad</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed"
          >
            Descubra por qué Labs 24K es la elección de los inversores que buscan seguridad, escalabilidad y un nicho de mercado líder.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sector.delay, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm transition-all duration-500 hover:border-electric/20"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-electric/5 flex items-center justify-center mb-8 border border-electric/10 group-hover:bg-electric group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(32,236,252,0.05)]">
                {React.cloneElement(sector.icon as React.ReactElement, { className: "text-electric group-hover:text-black transition-colors" })}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-electric transition-colors italic">
                {sector.title}
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed">
                {sector.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {sector.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                    <CheckCircle2 size={16} className="text-electric shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-electric/0 group-hover:bg-electric/40 blur-md transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
