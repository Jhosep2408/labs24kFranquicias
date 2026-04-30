"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Rocket } from "lucide-react";

export function BusinessOpportunity() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#000d1a] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(32,236,252,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Business Growth" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000d1a] via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="text-electric-cyan font-black uppercase tracking-[0.2em] text-[10px] mb-4">Visión de Mercado</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic mb-6 pr-10 overflow-visible">
              Identificamos el <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">éxito</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-8">
              No buscamos simplemente inversores; buscamos visionarios capaces de liderar la transformación tecnológica en sus regiones. Nuestra metodología llave en mano permite una escalabilidad sin precedentes.
            </p>

            <div className="space-y-4">
              {[
                { icon: TrendingUp, text: "Modelos de alta rentabilidad y ROI optimizado." },
                { icon: BarChart3, text: "Nichos de mercado exclusivos y protegidos." },
                { icon: Rocket, text: "Escalabilidad global con soporte continuo." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/70 group">
                  <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/20 group-hover:bg-electric-cyan/20 transition-all">
                    <item.icon size={16} className="text-electric-cyan" />
                  </div>
                  <span className="text-sm md:text-base font-light">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
