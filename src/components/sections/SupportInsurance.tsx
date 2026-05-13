"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Users } from "lucide-react";

export function SupportInsurance() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000d1a] relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-electric-cyan/5 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-4 border-l-4 border-electric-cyan pl-4">
            5. El "Seguro" Labs24k: <span className="text-white/50">Soporte 24/7</span>
          </h3>
          <p className="text-lg text-white/60 pl-5 max-w-3xl">
            Tu éxito es el nuestro. Por eso hemos diseñado un ecosistema de soporte que garantiza que nunca te enfrentes a un reto comercial o técnico en solitario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Conserje IA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-electric-cyan/40 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/20 text-electric-cyan group-hover:scale-110 transition-transform">
              <Bot size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black text-white uppercase italic leading-tight mb-3">Conserje IA</h4>
              <p className="text-white/70 font-light leading-relaxed">
                Un asistente de IA exclusivo para franquiciados que resuelve dudas sobre presupuestos, objeciones de venta y dudas técnicas al instante, directamente en tu móvil.
              </p>
            </div>
          </motion.div>

          {/* Comunidad de Líderes */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-electric-cyan/40 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center shrink-0 border border-electric-cyan/20 text-electric-cyan group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black text-white uppercase italic leading-tight mb-3">Comunidad de Líderes</h4>
              <p className="text-white/70 font-light leading-relaxed">
                Reuniones trimestrales de todos los dueños de zona. Masterminds privados para compartir las estrategias de captación y cierre que mejor están funcionando en el país.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
