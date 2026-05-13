"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Hammer, GraduationCap, PartyPopper, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Búsqueda del Local (Inmo-IA)",
    text: "Usamos nuestros algoritmos para encontrar el local con mayor tráfico de empresarios en tu ciudad.",
    icon: <Map size={24} />
  },
  {
    number: "2",
    title: "Adecuación Express",
    text: "Te entregamos el manual de marca y el contacto de la constructora que monta tu centro en tiempo récord.",
    icon: <Hammer size={24} />
  },
  {
    number: "3",
    title: "Formación \"Founder Level\"",
    text: "Una semana intensiva en la central. No para aprender a programar, sino para aprender a vender IA y gestionar equipos.",
    icon: <GraduationCap size={24} />
  },
  {
    number: "4",
    title: "Inauguración con IA",
    text: "Organizamos tu evento de apertura invitando a autoridades y prensa local con invitaciones generadas por nuestra IA.",
    icon: <PartyPopper size={24} />
  }
];

export function LaunchProtocol() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000814] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-4 border-l-0 md:border-l-4 border-electric-cyan md:pl-4">
            3. El Modelo Llave en Mano: <span className="text-white/50">Checklist de Apertura</span>
          </h3>
          <p className="text-lg text-white/60 md:pl-5">
            Lo llamamos el <strong className="text-electric-cyan font-bold italic">"Protocolo de Lanzamiento 45 Días"</strong>. Desde la firma hasta la facturación.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10"
              >
                <div className="p-8 rounded-[2rem] bg-[#001226] border border-white/10 hover:border-electric-cyan/50 transition-all h-full group">
                  <div className="w-12 h-12 rounded-full bg-electric-cyan text-black flex items-center justify-center font-black text-xl mb-6 shadow-[0_0_20px_rgba(32,236,252,0.4)]">
                    {step.number}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4 text-electric-cyan">
                    {step.icon}
                    <h4 className="text-lg font-black text-white uppercase leading-tight italic">
                      {step.title}
                    </h4>
                  </div>
                  
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {step.text}
                  </p>
                  
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-[#000814] border border-white/10 items-center justify-center text-white/30 -translate-y-1/2 z-20">
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
