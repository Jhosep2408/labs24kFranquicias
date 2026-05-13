"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, TrendingUp, Lock, Unlock, Phone, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    title: "Ayer: Telecomunicaciones (1996)",
    icon: <Phone size={24} />,
    color: "text-white/40",
    bgClass: "bg-white/[0.01] border-white/5",
    headerColor: "text-white/40",
    points: [
      { text: "El mundo necesitaba conectarse.", icon: <History size={16} /> },
      { text: "Negocio basado en tarjetas SIM y terminales.", icon: <History size={16} /> },
      { text: "Crecimiento vertical del 1.000%.", icon: <History size={16} /> },
    ],
    status: {
      text: "Oportunidad Cerrada",
      icon: <Lock size={18} />,
      style: "bg-red-500/10 text-red-500 border border-red-500/20"
    }
  },
  {
    title: "Hoy: Labs24k e Inteligencia Artificial",
    icon: <Cpu size={24} />,
    color: "text-electric-cyan",
    bgClass: "bg-white/[0.03] border-electric-cyan/30 shadow-[0_0_30px_rgba(32,236,252,0.1)] relative overflow-hidden",
    headerColor: "text-white",
    points: [
      { text: "El mundo necesita automatizarse.", icon: <TrendingUp size={16} /> },
      { text: "Negocio basado en Agentes IA y Eficiencia.", icon: <TrendingUp size={16} /> },
      { text: "Mercado valorado en trillones de euros para 2030.", icon: <TrendingUp size={16} /> },
    ],
    status: {
      text: "Oportunidad Abierta (Por tiempo limitado)",
      icon: <Unlock size={18} />,
      style: "bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/50 shadow-[0_0_15px_rgba(32,236,252,0.3)] animate-pulse"
    }
  }
];

export function Opportunity() {
  return (
    <section id="oportunidad" className="py-24 px-6 md:px-12 bg-[#000d1a] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-white/10 bg-white/5 text-white/50 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
            La Oportunidad
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic font-heading">
            Comparativa <span className="text-electric-cyan">Histórica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {comparisonData.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={cn("rounded-[2rem] border p-6 sm:p-8 md:p-12 flex flex-col h-full", col.bgClass)}
            >
              {/* Background glow for the active side */}
              {idx === 1 && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full pointer-events-none" />
              )}

              <div className={cn("flex flex-col sm:flex-row sm:items-center gap-4 mb-10 pb-6 border-b border-white/10", col.headerColor)}>
                <div className={cn("p-4 rounded-xl bg-white/5 self-start sm:self-auto", col.color)}>
                  {col.icon}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black italic uppercase leading-tight break-words tracking-tight sm:tracking-normal">
                  {col.title.split(': ').map((part, i) => (
                    <React.Fragment key={i}>
                      {i === 1 ? (
                        <span className={col.color}>
                          <span className="sm:hidden">&nbsp;</span>
                          <br className="hidden sm:block" />
                          {part}
                        </span>
                      ) : part}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="space-y-6 flex-grow mb-12">
                {col.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={cn("mt-1", col.color)}>
                      {point.icon}
                    </div>
                    <p className="text-lg text-white/70 font-light leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className={cn("flex items-center justify-center gap-3 py-4 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm text-center", col.status.style)}>
                  {col.status.icon}
                  {col.status.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
