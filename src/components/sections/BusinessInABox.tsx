"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Gavel, 
  Megaphone, 
  Palette, 
  GraduationCap, 
  Zap,
  CheckCircle2,
  Monitor
} from "lucide-react";

const storeFeatures = [
  "Diseño minimalista premium.",
  "Zonas de demostración en vivo.",
  "Software de gestión exclusiva para franquiciados.",
  "Soporte técnico centralizado: Tú vendes, nosotros programamos."
];

export function BusinessInABox() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", // Modern office
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Corporate tech
    "/images/branding-mockup.png" // The brand mockup
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="tecnologia" className="py-24 px-6 md:px-12 bg-[#000814] relative overflow-hidden border-b border-white/5">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            La Tienda del Futuro
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic font-heading mb-6">
            Tu Centro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Labs 24K</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-electric-cyan/[0.03] to-transparent p-8 md:p-16 rounded-[3rem] border border-white/5">
          {/* Slider / Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden group shadow-2xl"
          >
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt="Renders Centro Labs24k" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImage === idx ? 'opacity-80' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-60" />
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-8 h-1 rounded-full transition-colors ${currentImage === idx ? 'bg-electric-cyan' : 'bg-white/20'}`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 border-t border-r border-electric-cyan/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border-b border-l border-electric-cyan/20 rounded-bl-3xl pointer-events-none" />
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-electric-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Monitor size={14} /> Infraestructura Premium
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-8 leading-tight">
              Diseñado para <br />
              <span className="text-electric-cyan">Cerrar Contratos</span>
            </h3>
            
            <div className="space-y-6">
              {storeFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-cyan/20 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-electric-cyan/20 transition-colors">
                    <CheckCircle2 size={16} className="text-electric-cyan" />
                  </div>
                  <p className="text-base md:text-lg font-light text-white/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
