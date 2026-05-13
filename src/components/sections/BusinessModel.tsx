"use client";

import React from "react";
import { motion } from "framer-motion";
import { Euro, TrendingUp, Key, BarChart3, Users, Award } from "lucide-react";

const incomeStreams = [
  {
    icon: <Euro className="text-electric-cyan" />,
    title: "Capa 1: Margen Directo (Implementación)",
    description: "Beneficio inmediato por cada proyecto cerrado. Integración tecnológica y despliegue rápido.",
  },
  {
    icon: <TrendingUp className="text-electric-cyan" />,
    title: "Capa 2: Canon de Mantenimiento (Recurrencia)",
    description: "El cliente paga una cuota mensual por el uso de los servidores e IA de Labs24k. Tú te llevas una comisión del porcentaje cada mes de forma pasiva.",
  },
  {
    icon: <Award className="text-electric-cyan" />,
    title: "Capa 3: Consultoría de Estrategia",
    description: "Cobro por horas de formación y asesoramiento premium a ejecutivos locales.",
  },
];

export function BusinessModel() {
  return (
    <section id="modelo" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-[10px] font-black uppercase tracking-widest mb-6">
              El Modelo de Negocio
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase mb-8 italic">
              4. Estructura de <br />
              Rentabilidad <span className="text-electric-cyan">Blindada</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-white/60 leading-relaxed text-lg font-light">
                Para ser el modelo más completo, debemos ofrecer múltiples capas de beneficio simultáneas.
              </p>

              <div className="p-8 rounded-3xl bg-electric-cyan/5 border border-electric-cyan/20 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <BarChart3 size={100} className="text-electric-cyan" />
                </div>
                <h4 className="text-electric-cyan font-black uppercase text-xs tracking-widest mb-4">La Fórmula de la Rentabilidad</h4>
                <p className="text-white/80 text-sm leading-relaxed italic font-light">
                  "Combina el margen directo rápido de la implementación, con la estabilidad brutal del canon de mantenimiento mensual. Es el seguro definitivo."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            {incomeStreams.map((stream, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start gap-6 group hover:border-electric-cyan/30 hover:bg-white/[0.04] transition-all shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-electric-cyan/20 transition-all">
                  {stream.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3 tracking-normal md:tracking-tight italic uppercase">{stream.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed font-light">{stream.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
