"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, MonitorSmartphone } from "lucide-react";

const advantages = [
  {
    title: "Exclusividad Territorial por Contrato",
    subtitle: "(Monopolio Local)",
    icon: <ShieldCheck size={32} />,
    points: [
      {
        bold: "Blindaje:",
        text: "Registro de zona ante notario. Nadie más puede abrir un Labs24k ni vender servicios de la marca en tu radio de acción."
      },
      {
        bold: "Protección de Leads:",
        text: "Si un cliente de tu zona contacta con la central, el lead se te deriva automáticamente a ti."
      }
    ]
  },
  {
    title: "Marketing de Guerrilla Digital",
    subtitle: "(Generación de Leads)",
    icon: <Target size={32} />,
    points: [
      {
        bold: "Tráfico Centralizado:",
        text: "No te dejamos solo buscando clientes. La central gestiona campañas de Meta y Google Ads segmentadas específicamente para tu código postal."
      },
      {
        bold: "Volumen Constante:",
        text: "Recibes en tu CRM una lista diaria de pymes locales interesadas en digitalizarse con IA."
      }
    ]
  },
  {
    title: "El Diseño de Local \"Apple-Style\"",
    subtitle: "(Infraestructura Premium)",
    icon: <MonitorSmartphone size={32} />,
    points: [
      {
        bold: "Arquitectura Sensorial:",
        text: "Mobiliario, iluminación y fragancia corporativa diseñados para cerrar ventas de alto ticket. El cliente siente que ha entrado en el futuro."
      },
      {
        bold: "Hardware Premium:",
        text: "Pantallas táctiles de gran formato y estaciones de \"Demo Directa\" donde el cliente ve su propia empresa optimizada por IA en 10 minutos."
      }
    ]
  }
];

export function CompetitiveAdvantages() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black-pure relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-4 border-l-4 border-electric-cyan pl-4">
            2. Ventajas Competitivas: <span className="text-white/50">Lo que nadie más ofrece</span>
          </h3>
          <p className="text-lg text-white/60 pl-5">
            Hemos diseñado un modelo donde el riesgo operativo desaparece, entregando herramientas de corporación global al empresario local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-electric-cyan/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-8 border border-electric-cyan/20 text-electric-cyan group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h4 className="text-xl font-black text-white uppercase italic leading-tight mb-1">
                {adv.title}
              </h4>
              <h5 className="text-electric-cyan text-sm font-bold uppercase tracking-widest mb-6">
                {adv.subtitle}
              </h5>

              <ul className="space-y-4">
                {adv.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 font-light leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                    <p>
                      <strong className="text-white font-bold">{pt.bold}</strong> {pt.text}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
