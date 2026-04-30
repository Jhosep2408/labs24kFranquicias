"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#000d1a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-electric font-black uppercase tracking-[0.2em] text-[10px] mb-3">Dirección Estratégica</div>
            <h2 className="text-2xl md:text-5xl font-black text-white leading-tight uppercase italic break-words pr-10 overflow-visible">
              Diseñando el <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500 drop-shadow-sm">Futuro Digital</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-10 rounded-[1.2rem] md:rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-4 md:mb-6 border border-electric/20">
              <Target className="text-electric" size={24} />
            </div>
            <h3 className="text-lg md:text-3xl font-black text-white mb-3 uppercase italic">Misión</h3>
            <p className="text-[12px] md:text-lg text-white/80 font-light leading-relaxed">
              Empoderar a socios locales con tecnología de IA propietaria para liderar la transformación digital en sus territorios.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-10 rounded-[1.2rem] md:rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-4 md:mb-6 border border-electric/20">
              <Eye className="text-electric" size={24} />
            </div>
            <h3 className="text-lg md:text-3xl font-black text-white mb-3 uppercase italic">Visión</h3>
            <p className="text-[12px] md:text-lg text-white/80 font-light leading-relaxed">
              Ser la red de inteligencia artificial más grande y rentable del mundo, impulsando el éxito de cada uno de nuestros socios.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
