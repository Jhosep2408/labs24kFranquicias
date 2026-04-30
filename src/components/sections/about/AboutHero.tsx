"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-20 px-6 md:px-12 bg-[#000d1a] overflow-hidden">
      {/* Background Image Layer with Focus Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2074&auto=format&fit=crop" 
          alt="Global Vision" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        {/* Gradient Mask for Clarity/Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000d1a]/40 to-[#000d1a]/90" />
        <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_right,transparent_10%,black_70%)]" />
        
        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-electric/10 text-electric text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            Liderazgo Global en IA
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] md:leading-[1.1] tracking-tighter uppercase italic mb-6 drop-shadow-xl break-words">
            Construyendo el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">estándar global</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-lg font-light leading-relaxed mb-10 border-l-2 border-electric/30 pl-5">
            Una red internacional de innovación diseñada para líderes que quieren dominar su mercado a través de tecnología propietaria y visión estratégica.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contacto" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-5 bg-electric text-black font-black uppercase tracking-widest text-base rounded-sm flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(32,236,252,0.4)]"
              >
                Aplicar como socio
                <ArrowRight size={22} />
              </motion.button>
            </Link>
            <button className="text-white/60 hover:text-electric font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2 group py-2">
              Nuestra Visión 
              <span className="w-8 h-[1px] bg-white/20 group-hover:bg-electric group-hover:w-12 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative order-2 w-full max-w-2xl mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 bg-electric/20 blur-2xl rounded-[3rem] opacity-40" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video md:aspect-[16/10] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate Excellence" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a]/90 via-transparent to-transparent" />
            
            {/* Floating Metric */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 glass rounded-2xl border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">Territorios</div>
                <div className="text-xl font-black text-white italic">+15 Países</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-electric animate-ping" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
