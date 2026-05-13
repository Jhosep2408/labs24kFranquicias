"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Opportunity } from "@/components/sections/Opportunity";
import { AIOperatingSystem } from "@/components/sections/AIOperatingSystem";
import { CompetitiveAdvantages } from "@/components/sections/CompetitiveAdvantages";
import { LaunchProtocol } from "@/components/sections/LaunchProtocol";
import { SupportInsurance } from "@/components/sections/SupportInsurance";
import { Sectors } from "@/components/sections/Sectors";
import { BusinessInABox } from "@/components/sections/BusinessInABox";
import { MonopolyCalculator } from "@/components/sections/MonopolyCalculator";
import { TuringTest } from "@/components/sections/TuringTest";
import { Authority } from "@/components/sections/Authority";
import { FutureVision } from "@/components/sections/FutureVision";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, TrendingUp, Key, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#000d1a] min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Manifesto Section (Blueprint Step 3) */}
      <Manifesto />

      {/* Opportunity Section (Blueprint Step 4) */}
      <Opportunity />

      {/* AI Operating System (New Ecosystem Step 1) */}
      <AIOperatingSystem />

      {/* Competitive Advantages (New Ecosystem Step 2) */}
      <CompetitiveAdvantages />

      {/* Launch Protocol (New Ecosystem Step 3) */}
      <LaunchProtocol />

      {/* Business Model Section (New Ecosystem Step 4) */}
      <BusinessModel />

      {/* Support & Insurance (New Ecosystem Step 5) */}
      <SupportInsurance />

      {/* Sectors Section */}
      <Sectors />

      {/* Business-in-a-Box Section (Blueprint Step 6) */}
      <BusinessInABox />

      {/* Monopoly Calculator Section (Blueprint Step 7) */}
      <MonopolyCalculator />

      {/* Turing Test / AI Chat Section (Blueprint Step 8) */}
      <TuringTest />

      {/* Authority & Trust Section (New) */}
      <Authority />

      {/* Authority Infinite Banner */}
      <section className="py-12 bg-[#000814] border-y border-white/5 overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap items-center gap-24 pr-24"
        >
          {/* First Set of Items */}
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              <div className="flex items-center gap-3 font-black text-xl md:text-2xl tracking-tighter text-white/40">
                <TrendingUp className="text-electric-cyan" /> SOCIO ESTRATÉGICO
              </div>
              <div className="flex items-center gap-3 font-black text-xl md:text-2xl tracking-tighter text-white/40">
                <Award className="text-electric-cyan" /> MODELO PREMIUM
              </div>
              <div className="flex items-center gap-3 font-black text-xl md:text-2xl tracking-tighter text-white/40">
                <Key className="text-electric-cyan" /> LLAVE EN MANO
              </div>
              <div className="flex items-center gap-3 font-black text-xl md:text-2xl tracking-tighter text-white/40">
                <Shield className="text-electric-cyan" /> ÉXITO GARANTIZADO
              </div>
              <div className="flex items-center gap-3 font-black text-xl md:text-2xl tracking-tighter text-white/40">
                <Globe className="text-electric-cyan" /> EXCLUSIVIDAD GLOBAL
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Future Vision & Roadmap (New) */}
      <FutureVision />

      {/* FAQ Section (New) */}
      <FAQ />

      {/* Lead Capture Form Section */}
      <LeadForm />
      
      {/* Support Section */}
      <section className="py-24 px-6 md:px-12 bg-black-pure border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-10 group">
            <div className="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-electric-cyan" size={32} />
            </div>
            <h4 className="text-xl font-black uppercase mb-4 italic">Alta Rentabilidad</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Optimización de ingresos IA</p>
          </div>
          <div className="flex flex-col items-center text-center p-10 border-x border-white/10 group">
            <div className="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-electric-cyan" size={32} />
            </div>
            <h4 className="text-xl font-black uppercase mb-4 italic">Soporte Corporativo</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Asesoría Legal y Técnica</p>
          </div>
          <div className="flex flex-col items-center text-center p-10 group">
            <div className="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="text-electric-cyan" size={32} />
            </div>
            <h4 className="text-xl font-black uppercase mb-4 italic">Nicho Exclusivo</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Liderazgo de Mercado Local</p>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <FinalCTA />
    </main>
  );
}
