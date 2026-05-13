"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, ShieldCheck, Zap, ArrowRight, BrainCircuit, Globe } from "lucide-react";

export function FutureVision() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000510] relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-cyan/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Ethics & Future Human */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-electric-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <ShieldCheck size={14} /> Ética y Humanismo 2.0
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic font-heading mb-8">
              La IA como el gran <br />
              <span className="text-electric-cyan">Potenciador Humano</span>
            </h3>
            <div className="space-y-6">
              <p className="text-white/60 text-lg font-light leading-relaxed">
                No creemos en la IA como reemplazo, sino como el oxígeno que libera el potencial creativo. Nuestro objetivo es eliminar las tareas repetitivas para que las personas puedan enfocarse en lo que realmente importa: la <span className="text-white font-bold">estrategia y la innovación</span>.
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex gap-4 items-start">
                <BrainCircuit className="text-electric-cyan shrink-0" size={24} />
                <p className="text-sm text-white/40 italic font-light">
                  "Lideramos una transición ética hacia una economía donde la inteligencia es el activo más valioso."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Roadmap 2030 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-2 text-electric-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Compass size={14} /> Visión a Largo Plazo
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic font-heading mb-8">
              Roadmap <span className="text-electric-cyan">2030</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { year: "2026", task: "Expansión Global de Centros de Excelencia.", active: true },
                { year: "2027", task: "Integración masiva de IA Agéntica en Sector Público.", active: false },
                { year: "2028", task: "Liderazgo en Gobernanza de Datos y Soberanía Digital.", active: false },
                { year: "2030+", task: "Nuevas fronteras: Computación Cuántica Aplicada.", active: false }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border transition-all ${item.active ? 'bg-electric-cyan/10 border-electric-cyan/30' : 'bg-white/[0.01] border-white/5 opacity-50'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black italic ${item.active ? 'text-electric-cyan' : 'text-white/40'}`}>{item.year}</span>
                    {item.active && <Zap size={14} className="text-electric-cyan animate-pulse" />}
                  </div>
                  <p className={`text-base font-bold mt-2 ${item.active ? 'text-white' : 'text-white/20'}`}>{item.task}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-electric-cyan font-bold uppercase text-[10px] tracking-widest px-2">
              <Globe size={16} />
              Asegure su posición en la economía del mañana hoy mismo.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
