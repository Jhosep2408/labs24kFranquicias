"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Manifesto() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000814] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-[9px] font-black uppercase tracking-[0.2em] mb-6">
              El Manifiesto
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic font-heading mb-8 leading-tight">
              El 1996 de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">
                Inteligencia Artificial
              </span>
            </h2>
            
            <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric-cyan rounded-l-2xl" />
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                <strong className="text-white">La historia se repite.</strong> Quienes instalaron la infraestructura de telefonía y fibra en los 90 hoy dominan el mercado. 
              </p>
              <p className="mt-4 text-lg md:text-xl text-white/80 font-light leading-relaxed">
                Labs24k instala la <strong className="text-electric-cyan">infraestructura del cerebro digital</strong> de las empresas globales. El momento de posicionarse es ahora, no cuando el mercado ya esté saturado.
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder / Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind video */}
            <div className="absolute -inset-4 bg-electric-cyan/20 blur-[100px] rounded-full z-0" />
            
            <div className="relative z-10 aspect-video bg-[#000d1a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Fake Video Thumbnail (Dark techy background) */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-transparent to-transparent opacity-80" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-electric-cyan/20 flex items-center justify-center backdrop-blur-md border border-electric-cyan/50 group-hover:scale-110 group-hover:bg-electric-cyan/40 transition-all duration-300">
                  <PlayCircle size={40} className="text-white ml-2" />
                </div>
                <span className="mt-6 text-white font-bold tracking-widest uppercase text-xs">Ver el Manifiesto</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
