"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  PieChart, 
  ShieldCheck, 
  UserCheck, 
  Target,
  ArrowRight
} from "lucide-react";

const financialBreakdown = [
  { label: "Canon de Entrada", value: 35, color: "#20ecfc", description: "Derechos de marca y acceso al ecosistema." },
  { label: "Equipamiento Tech", value: 25, color: "#1e40af", description: "Hardware y sistemas de IA propietarios." },
  { label: "Formación Inicial", value: 15, color: "#3b82f6", description: "Capacitación de elite (Labs Academy)." },
  { label: "Stock de Productos", value: 15, color: "#60a5fa", description: "Asistentes y automatizaciones listas." },
  { label: "Fondo de Maniobra", value: 10, color: "#93c5fd", description: "Respaldo operativo para el inicio." }
];

export function Authority() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000d1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Prueba Social: Unidad Piloto */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-electric-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4">Prueba de Concepto</div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic font-heading mb-8">
                Resultados de nuestra <br />
                <span className="text-electric-cyan">Unidad Piloto</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                No somos una promesa, somos una realidad probada. Nuestra unidad central ha demostrado la rentabilidad del modelo facturando volúmenes significativos en tiempo récord.
              </p>
              
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp size={80} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight md:tracking-tighter">+120.000€</div>
                <p className="text-electric-cyan font-bold uppercase text-xs tracking-widest mb-6">Facturación primeros 6 meses</p>
                <div className="flex items-center gap-2 text-white/40 text-sm italic">
                  <ShieldCheck size={16} className="text-electric-cyan" />
                  Garantía de tecnología propia 100% operativa.
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center">
                <div className="text-3xl font-black text-white mb-1">85%</div>
                <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">Margen de Producto</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center">
                <div className="text-3xl font-black text-white mb-1">2.4x</div>
                <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">ROI Proyectado</p>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-electric-cyan/10 to-transparent border border-electric-cyan/20 p-8 rounded-3xl">
                <h4 className="text-white font-bold mb-2 uppercase italic tracking-normal md:tracking-tight">Capacidad de Escalado</h4>
                <p className="text-white/40 text-sm font-light">Nuestros sistemas permiten gestionar hasta 50 clientes corporativos de forma simultánea por cada unidad operativa.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Factor Humano */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic font-heading mb-6">
              El <span className="text-electric-cyan">Factor Humano</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              No estás solo con una IA. Detrás tienes a un equipo de expertos en tecnología, estrategia y negocio asegurando tu éxito cada día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fundadores", img: "/images/founders.png", desc: "Visión estratégica y liderazgo tecnológico global." },
              { title: "Soporte Técnico", img: "/images/support.png", desc: "Ingenieros de élite garantizando la operatividad 24/7." },
              { title: "Estrategia B2B", img: "/images/strategy.png", desc: "Expertos en cierre de contratos de alto valor institucional." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden relative mb-6 shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-[#000d1a]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 pr-6">
                    <h4 className="text-xl font-black text-white uppercase italic tracking-normal md:tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-electric-cyan text-[10px] font-black uppercase tracking-widest">Expertos Senior</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed px-2 font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Transparencia Financiera */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-electric-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <PieChart size={14} /> Transparencia Total
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-8">
                Desglose de la <br />
                <span className="text-electric-cyan">Inversión de 50.000€</span>
              </h3>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
                Cada euro está destinado a maximizar tu capacidad operativa. Aquí no hay gastos ocultos, solo infraestructura de alto rendimiento.
              </p>
              
              <div className="space-y-4">
                {financialBreakdown.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-white font-bold uppercase tracking-normal md:tracking-tight italic text-sm">{item.label}</span>
                      <span className="text-electric-cyan font-black">{item.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-electric-cyan shadow-[0_0_10px_rgba(32,236,252,0.5)]"
                      />
                    </div>
                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full border border-white/5 flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 bg-electric-cyan/5 blur-3xl rounded-full" />
                <div className="text-center z-10">
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 italic tracking-tight md:tracking-tighter">50K</div>
                  <p className="text-electric-cyan font-bold uppercase text-[10px] tracking-[0.4em]">Inversión Llave en Mano</p>
                </div>
                
                {/* Decorative Chart Elements */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="rgba(32,236,252,0.05)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="#20ecfc"
                    strokeWidth="4"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                    className="opacity-20"
                  />
                </svg>
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-electric-cyan/5 border border-electric-cyan/20">
                <div className="flex gap-4 items-center text-white/80">
                  <Target className="text-electric-cyan shrink-0" size={32} />
                  <p className="text-xs font-bold leading-relaxed uppercase tracking-normal md:tracking-tight">
                    "Diseñado para eliminar el miedo al riesgo y asegurar una base financiera sólida desde el día 1."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
