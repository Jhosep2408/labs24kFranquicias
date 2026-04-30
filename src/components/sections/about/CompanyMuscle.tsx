"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Users, Cpu, ShieldCheck } from "lucide-react";

const stats = [
  { value: "+200", label: "Ingenieros Expertos", icon: Users },
  { value: "360°", label: "Soporte Global", icon: ShieldCheck },
  { value: "100%", label: "Tecnología Propia", icon: Cpu },
  { value: "50TB", label: "Procesamiento IA", icon: Server },
];

export function CompanyMuscle() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#001226] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-electric-cyan font-black uppercase tracking-[0.2em] text-[10px] mb-4">Capacidad Operativa</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic mb-6 pr-10 overflow-visible">
              El músculo técnico <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">detrás del éxito</span>
            </h2>
            <p className="text-white/80 text-base md:text-xl font-light leading-relaxed">
              No solo tenemos visión, tenemos la infraestructura para ejecutarla. Labs 24K cuenta con un equipo de élite y recursos técnicos de primer nivel mundial.
            </p>
          </motion.div>
          
          <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 glass hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              alt="High Tech Infrastructure" 
              className="w-full h-full object-cover grayscale opacity-40 hover:opacity-80 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.02] text-center hover:bg-electric-cyan/5 hover:border-electric-cyan/20 transition-all group"
            >
              <div className="text-electric-cyan mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-6xl font-black text-white italic tracking-tighter mb-1">{stat.value}</div>
              <div className="text-[8px] md:text-xs text-white/40 font-black uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
