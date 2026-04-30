"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#001226] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-electric-cyan font-black uppercase tracking-[0.2em] text-[10px] mb-4">Autoridad Corporativa</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic mb-6 pr-10 overflow-visible">
              Más que una empresa, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">un ecosistema de élite</span>
            </h2>
          <div className="space-y-4 text-white/80 text-base md:text-lg font-light leading-relaxed">
            <p>
              Labs 24K no nació para seguir tendencias, sino para establecer el estándar de la industria. Somos un ecosistema global que fusiona inteligencia artificial con modelos de negocio de alta rentabilidad.
            </p>
            <p>
              Nuestra marca es sinónimo de solidez. No operamos sobre teorías; implementamos <span className="text-white font-bold italic">tecnología propietaria</span> diseñada para generar resultados reales y dominancia de mercado.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-xl md:text-2xl font-black text-white italic">Marca Global</div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Mercados clave</p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white italic">Solidez Real</div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Resultados demostrables</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] lg:aspect-square"
        >
          <div className="absolute inset-0 bg-electric-cyan/5 blur-[80px] rounded-full" />
          <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] border border-white/10 overflow-hidden glass">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
              alt="Elite Business Team" 
              className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-70 transition-all duration-700"
            />
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-4 -left-4 p-5 md:p-6 bg-[#001a33] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl">
            <div className="text-2xl md:text-3xl font-black text-electric-cyan">N°1</div>
            <div className="text-[8px] text-white/60 uppercase tracking-[0.2em] font-black">Líder en Innovación</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
