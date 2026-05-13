"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo apoya la central en proyectos para la Administración Pública?",
    answer: "Proporcionamos protocolos probados, asesoría técnica en pliegos de licitación y sistemas ya habilitados para cumplir con los estándares institucionales. Te acompañamos en todo el proceso de preventa y ejecución técnica."
  },
  {
    question: "¿Qué alcance tienen los sistemas avanzados que puedo vender?",
    answer: "Tienes acceso a todo nuestro catálogo: desde asistentes virtuales personalizados hasta automatizaciones complejas de flujos de trabajo e integraciones de IA en sistemas legados. No hay límite técnico; si la central lo desarrolla, tú lo puedes facturar."
  },
  {
    question: "¿Tengo exclusividad de zona para licitaciones y ventas?",
    answer: "Sí, garantizamos exclusividad geográfica por contrato. Esto significa que cualquier oportunidad detectada en tu zona protegida te pertenece, asegurando que tu inversión no compita con otros socios de la marca."
  },
  {
    question: "¿Cuál es la duración del contrato de franquicia?",
    answer: "Nuestros contratos estándar tienen una duración inicial de 5 años, renovables, diseñados para ofrecer estabilidad a largo plazo y asegurar que amortices tu inversión y generes beneficios sostenibles."
  },
  {
    question: "¿Qué tipo de soporte técnico y estratégico recibo?",
    answer: "Recibes soporte técnico 24/7 para incidencias críticas y consultoría estratégica semanal para ayudarte a escalar tu agencia. Labs Academy te mantiene actualizado en las últimas tendencias de IA constantemente."
  },
  {
    question: "¿Es necesario tener conocimientos previos en programación?",
    answer: "No. Labs 24K es un modelo 'Business-in-a-Box'. Nosotros ponemos la ingeniería; tú pones la gestión comercial y la visión local. Te formamos en todo lo necesario para entender y vender la tecnología."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#000814]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-[10px] font-black uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Resolviendo Dudas
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic font-heading mb-6">
            Preguntas <span className="text-electric-cyan">Frecuentes</span>
          </h2>
          <p className="text-white/40 font-light text-lg">
            Todo lo que necesitas saber antes de convertirte en socio estratégico de Labs 24K.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-white/5 rounded-3xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4"
              >
                <span className="text-lg md:text-xl font-bold text-white uppercase italic tracking-normal md:tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-electric-cyan border-electric-cyan' : ''}`}>
                  {openIndex === index ? (
                    <Minus size={18} className="text-black" />
                  ) : (
                    <Plus size={18} className="text-white/40" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="w-full h-px bg-white/5 mb-6" />
                      <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
