"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white/[0.02] rounded-3xl border border-white/10 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:border-electric/30 transition-all duration-500 hover:bg-white/[0.04]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured Image */}
        <div className="relative aspect-video lg:aspect-auto h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Dashboard tecnológico moderno"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] to-transparent lg:bg-none" />
          <div className="absolute top-4 left-4 lg:hidden">
            <span className="px-3 py-1 bg-electric/20 text-electric text-xs font-black uppercase tracking-wider rounded-full border border-electric/30">
              Destacado
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative">
          <div className="hidden lg:inline-block mb-6">
            <span className="px-3 py-1 bg-electric/10 text-electric text-[10px] font-black uppercase tracking-widest rounded-full border border-electric/30">
              Artículo Destacado
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/50 mb-4 font-medium">
            <div className="flex items-center gap-1.5">
              <User size={16} />
              <span>Dra. Elena Costa</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>8 min de lectura</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric group-hover:to-blue-500 transition-all pr-4 overflow-visible uppercase italic">
            Cómo la automatización inteligente está redefiniendo el ROI en 2026
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-light">
            Análisis profundo sobre por qué las empresas líderes están abandonando el software tradicional para adoptar agentes de inteligencia artificial autónomos, y cómo esto reduce los costos operativos en un 40% en el primer año.
          </p>

          <div className="mt-auto">
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-electric font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
            >
              Leer análisis completo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
