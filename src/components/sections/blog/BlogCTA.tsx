"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu } from "lucide-react";
import Link from "next/link";

export function BlogCTA() {
  return (
    <section className="py-24 bg-[#000d1a] relative overflow-hidden">
      {/* Abstract Corporate Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(32,236,252,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-electric/30 text-electric shadow-[0_0_15px_rgba(32,236,252,0.2)]">
            <Cpu size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 pr-10 overflow-visible uppercase italic">
            ¿Quieres aplicar inteligencia artificial <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">
              en tu empresa?
            </span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Descubra cómo nuestras soluciones propietarias pueden optimizar sus operaciones, reducir costos y posicionarlo como líder de su industria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-electric text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(32,236,252,0.3)] flex items-center justify-center gap-3"
              >
                Hablar con un experto
                <ArrowUpRight size={20} />
              </motion.button>
            </Link>
            
            <Link href="/sobre-nosotros">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white/5 hover:border-electric transition-colors flex items-center justify-center"
              >
                Conocer nuestra tecnología
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
