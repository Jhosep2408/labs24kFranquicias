"use client";

import React from "react";
import { motion } from "framer-motion";

export function GlobalPresence() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#000d1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-electric-cyan font-black uppercase tracking-[0.3em] text-xs mb-6">Red Internacional</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-8">
              Una red que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">no conoce fronteras</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-8">
              Labs 24K se expande globalmente, conectando nodos de innovación en los principales centros financieros y tecnológicos. Al unirse, obtiene autoridad de marca inmediata.
            </p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div>
                <div className="text-2xl md:text-4xl font-black text-white italic">+15</div>
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">Países</p>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-white italic">24/7</div>
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">Operativa</p>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-white italic">Elite</div>
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">Partner</p>
              </div>
            </div>
          </motion.div>

          {/* Animated Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-electric/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
                alt="Global Network Map" 
                className="w-full h-full object-cover grayscale opacity-30 transition-opacity duration-1000"
              />
              
              {/* Map Dots Overlay (Simulated) */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-[30%] left-[20%] w-2 h-2 md:w-3 md:h-3 bg-electric rounded-full shadow-[0_0_15px_rgba(32,236,252,0.8)]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  className="absolute top-[40%] left-[45%] w-1.5 h-1.5 md:w-2 md:h-2 bg-electric rounded-full shadow-[0_0_10px_rgba(32,236,252,0.8)]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute top-[25%] left-[70%] w-3 h-3 md:w-4 md:h-4 bg-electric rounded-full shadow-[0_0_20px_rgba(32,236,252,0.8)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
