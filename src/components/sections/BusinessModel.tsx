"use client";

import React from "react";
import { motion } from "framer-motion";
import { Euro, TrendingUp, Key, BarChart3, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Euro className="text-electric-cyan" />,
    title: "Inversión Inteligente",
    description: "Desde 50.000€ accede a un ecosistema de alta tecnología con mobiliario premium y marketing disruptivo.",
  },
  {
    icon: <TrendingUp className="text-electric-cyan" />,
    title: "ROI Acelerado",
    description: "Retorno de inversión proyectado entre 2 y 3 años con un modelo de negocio optimizado para el éxito.",
  },
  {
    icon: <Key className="text-electric-cyan" />,
    title: "Llave en Mano",
    description: "Nos encargamos de todo: desde el diseño del local hasta la formación de su equipo de elite.",
  },
];

export function BusinessModel() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
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
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
              Oportunidad de Negocio 2026
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase mb-8 italic">
              La Franquicia Rentable que <br />
              <span className="text-electric-cyan">Revoluciona el Mercado</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-white/60 leading-relaxed text-lg font-light">
                Labs 24K redefine el concepto de franquicia corporativa. No solo entregamos un local; entregamos un <span className="text-white font-bold">laboratorio de éxito empresarial</span> impulsado por IA y diseño de vanguardia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-cyan/30 transition-colors group">
                  <div className="text-3xl font-black text-white mb-1">5%</div>
                  <div className="text-[10px] text-electric-cyan font-black uppercase tracking-widest opacity-60">Royalties Competitivos</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-cyan/30 transition-colors group">
                  <div className="text-3xl font-black text-white mb-1">24/7</div>
                  <div className="text-[10px] text-electric-cyan font-black uppercase tracking-widest opacity-60">Soporte Estratégico</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 flex items-start gap-6 group hover:bg-white/[0.05] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
