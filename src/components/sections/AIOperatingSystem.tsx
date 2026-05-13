"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Network, ShieldCheck } from "lucide-react";

export function AIOperatingSystem() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000814] relative border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(32,236,252,0.15)]"
          >
            <ShieldCheck size={14} /> Ecosistema Blindado
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic font-heading mb-6"
          >
            Por qué Labs24k es una <span className="text-electric-cyan">Inversión</span>, <br className="hidden md:block" />
            <span className="text-white/40">no un riesgo.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed italic"
          >
            "Nosotros ponemos la tecnología, el marketing y la infraestructura. Tú pones la ambición y los contactos locales. Es la sociedad perfecta del siglo XXI."
          </motion.p>
        </div>

        {/* El Concepto: The AI Operating System */}
        <div className="mb-16">
          <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-4 border-l-4 border-electric-cyan pl-4">
            1. El Concepto: <span className="text-white/50">The AI Operating System</span>
          </h3>
          <p className="text-lg text-white/60 mb-12 pl-5">
            No entregamos una tienda; entregamos un negocio con un sistema operativo propio. El franquiciado no tiene que inventar nada, solo ejecutar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* A. Ingeniería Back-Office */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-electric-cyan/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 blur-[50px] group-hover:bg-electric-cyan/20 transition-colors" />
              
              <div className="w-14 h-14 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-8 border border-electric-cyan/20 text-electric-cyan">
                <Code2 size={28} />
              </div>
              <h4 className="text-2xl font-black text-white uppercase italic mb-6">A. Ingeniería "Back-Office" <br/><span className="text-electric-cyan">Centralizada</span></h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-white font-bold">Tú vendes, nosotros construimos:</strong> El mayor miedo del franquiciado es no saber programar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-white font-bold">La Ventaja:</strong> El franquiciado capta al cliente y realiza el diagnóstico; el equipo central de ingenieros de Labs24k desarrolla la solución IA (Agentes, automatizaciones, bots).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-electric-cyan font-bold italic">El franquiciado se queda con el margen sin tocar una sola línea de código.</strong>
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* B. El Marketplace */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-electric-cyan/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 blur-[50px] group-hover:bg-electric-cyan/20 transition-colors" />
              
              <div className="w-14 h-14 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-8 border border-electric-cyan/20 text-electric-cyan">
                <Network size={28} />
              </div>
              <h4 className="text-2xl font-black text-white uppercase italic mb-6">B. El "Marketplace" de <br/><span className="text-electric-cyan">Soluciones Pre-configuradas</span></h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-white font-bold">Acceso inmediato:</strong> Librería de soluciones IA ya testeadas en otros sectores (Inmobiliario, Legal, Retail, Logística).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-white font-bold">Replicabilidad Masiva:</strong> Si un franquiciado en Valencia soluciona un problema a un buffet de abogados, esa solución se sube al Marketplace.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-electric-cyan font-bold italic">Tú puedes vendérsela a los abogados de tu ciudad con un solo clic.</strong>
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
