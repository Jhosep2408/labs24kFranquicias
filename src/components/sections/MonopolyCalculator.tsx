"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Building2, MapPin } from "lucide-react";

const CITIES = [
  { name: "Madrid / Barcelona", multiplier: 1.5, baseCompanies: 500000 },
  { name: "Valencia / Sevilla", multiplier: 1.2, baseCompanies: 200000 },
  { name: "Málaga / Bilbao", multiplier: 1.1, baseCompanies: 150000 },
  { name: "Otras Capitales", multiplier: 0.9, baseCompanies: 80000 },
  { name: "Municipios +50k hab.", multiplier: 0.7, baseCompanies: 30000 },
];

export function MonopolyCalculator() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [marketShare, setMarketShare] = useState(1); // Percentage (1 to 10%)

  // Calc Logic
  const capturedCompanies = Math.floor(selectedCity.baseCompanies * (marketShare / 100));
  const arrPerCompany = 300; // Average Monthly Recurring Revenue per company in EUR
  const annualRevenue = capturedCompanies * arrPerCompany * 12;
  const ebitdaMargin = 0.6; // 60% margin
  const ebitda = annualRevenue * ebitdaMargin;
  
  // Resale valuation multiple (SaaS/Tech usually 4x-6x EBITDA)
  const valuationMultiple = 5; 
  const resaleValue = ebitda * valuationMultiple;

  return (
    <section id="rentabilidad" className="py-24 px-6 md:px-12 bg-[#000814] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <Calculator size={14} /> Calculadora de Monopolio
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic font-heading mb-6">
            ¿Cuál es el potencial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">de tu zona?</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Un inversor real no busca un sueldo mensual. Busca construir un activo de alto valor patrimonial. Calcula el valor de reventa de tu licencia a 5 años.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controles (Sliders) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10"
          >
            {/* City Selector */}
            <div>
              <label className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs mb-4">
                <MapPin size={16} className="text-electric-cyan" /> 1. Selecciona tu Tipo de Zona
              </label>
              <div className="space-y-2">
                {CITIES.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                      selectedCity.name === city.name 
                        ? "bg-electric-cyan/10 border-electric-cyan text-electric-cyan" 
                        : "bg-transparent border-white/10 text-white/50 hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Market Share Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Building2 size={16} className="text-electric-cyan" /> 2. Penetración de Mercado
                </label>
                <span className="text-electric-cyan font-black text-xl">{marketShare}%</span>
              </div>
              <p className="text-white/30 text-xs mb-4 font-light">¿Qué porcentaje de las empresas de tu zona vas a captar en 5 años?</p>
              
              <input 
                type="range" 
                min="0.1" 
                max="5" 
                step="0.1"
                value={marketShare}
                onChange={(e) => setMarketShare(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
              />
              <div className="flex justify-between text-white/30 text-[10px] uppercase font-bold mt-2">
                <span>Conservador (0.1%)</span>
                <span>Agresivo (5%)</span>
              </div>
            </div>
          </motion.div>

          {/* Resultados Dinámicos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative h-full p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-electric-cyan/10 to-blue-900/10 border border-electric-cyan/30 shadow-[0_0_50px_rgba(32,236,252,0.1)] flex flex-col justify-center overflow-hidden group">
              {/* Animated glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-cyan/20 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm mb-2">
                  Empresas Captadas: <span className="text-white">{capturedCompanies.toLocaleString()} clientes</span>
                </h3>
                <h3 className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm mb-12">
                  Facturación Anual Proyectada: <span className="text-white">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(annualRevenue)}</span>
                </h3>

                <div className="border-t border-electric-cyan/20 pt-8 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#05101f] px-4 text-electric-cyan text-[10px] font-black uppercase tracking-widest border border-electric-cyan/20 rounded-full">
                    Valor de Reventa del Activo (Año 5)
                  </div>
                  
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-4 text-5xl md:text-7xl font-black text-white tracking-tight md:tracking-tighter italic mb-4 drop-shadow-[0_0_15px_rgba(32,236,252,0.5)]">
                      {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(resaleValue)}
                    </div>
                    <p className="text-electric-cyan/80 font-light max-w-md text-sm leading-relaxed">
                      Cálculo basado en un múltiplo conservador de 5x sobre EBITDA (60% margen). Este es el capital final estimado al salir del negocio.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                   <button onClick={() => window.location.href = '#expansion'} className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-electric-cyan transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                     Bloquear mi Zona Ahora <TrendingUp size={18} />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
