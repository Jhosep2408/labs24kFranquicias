"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

export function TuringTest() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hola, soy el Agente IA de Labs 24K. Estoy aquí para resolver cualquier duda sobre el canon de entrada, los royalties o cómo vamos a dominar tu región tecnológica. ¿Qué te gustaría saber?",
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedAnswers: Record<string, string> = {
    canon: "El canon de entrada es desde 50.000€, dependiendo de la densidad poblacional de tu zona. Te otorga la exclusividad territorial absoluta y el despliegue del ecosistema completo.",
    royalty: "No creemos en impuestos abusivos. Nuestro modelo se basa en un revenue share del 15% sobre las licencias SaaS que tus clientes abonen. Ganamos cuando tú ganas.",
    tiempo: "El tiempo de apertura de un Centro Labs 24K es de 4 a 6 semanas desde la firma del acuerdo. Nuestro equipo técnico se encarga de la configuración del software y la instalación física.",
    region: "Nuestros Agentes IA auditan y optimizan los procesos de las PYMES locales, reduciendo sus costes operativos hasta en un 40%. Las empresas de tu región no tendrán otra opción que contratarte para sobrevivir.",
    default: "Esa es una excelente pregunta. Para darte cifras exactas sobre tu zona específica, lo ideal es que nuestro equipo de expansión hable contigo directamente. ¿Has solicitado ya la exclusividad de tu código postal?",
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input;
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let responseText = predefinedAnswers.default;

      if (lowerInput.includes("canon") || lowerInput.includes("inversion") || lowerInput.includes("precio") || lowerInput.includes("cuesta")) {
        responseText = predefinedAnswers.canon;
      } else if (lowerInput.includes("royalty") || lowerInput.includes("regalias") || lowerInput.includes("porcentaje")) {
        responseText = predefinedAnswers.royalty;
      } else if (lowerInput.includes("tiempo") || lowerInput.includes("apertura") || lowerInput.includes("tarda")) {
        responseText = predefinedAnswers.tiempo;
      } else if (lowerInput.includes("region") || lowerInput.includes("ciudad") || lowerInput.includes("transformar") || lowerInput.includes("empresas")) {
        responseText = predefinedAnswers.region;
      }

      setMessages(prev => [...prev, { role: "ai", text: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-b border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Copy Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(32,236,252,0.15)]">
              <Sparkles size={14} className="animate-pulse" /> IA en Vivo
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic font-heading mb-6">
              La Prueba <br />
              <span className="text-electric-cyan">de Turing</span>
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
              No nos creas a nosotros. Pon a prueba nuestra propia tecnología.
            </p>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <p className="text-white/60 font-bold italic">
                "Pregúntale a nuestro Agente IA interactivo cómo va a transformar los negocios de tu región, cuáles son las condiciones financieras o cuánto se tarda en abrir."
              </p>
            </div>
            
            <div className="mt-8 flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40">Canon</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40">Royalties</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40">Tiempos</span>
            </div>
          </motion.div>

          {/* Chat Interface Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Avatar Head/Glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-black border-2 border-electric-cyan flex items-center justify-center shadow-[0_0_30px_rgba(32,236,252,0.5)] overflow-hidden">
                  <img src="/images/founders.png" alt="Avatar IA" className="w-full h-full object-cover opacity-80" />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
              </div>
            </div>

            {/* Chat Box */}
            <div className="pt-16 px-6 pb-6 rounded-3xl bg-[#000814] border border-electric-cyan/20 shadow-2xl relative z-10 flex flex-col h-[500px]">
              
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10" : "bg-electric-cyan/20 text-electric-cyan"}`}>
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl max-w-[80%] ${
                      msg.role === "user" 
                        ? "bg-white/10 text-white rounded-tr-none" 
                        : "bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan/90 rounded-tl-none font-light"
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-electric-cyan/20 text-electric-cyan flex items-center justify-center shrink-0">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 rounded-2xl bg-electric-cyan/5 border border-electric-cyan/10 rounded-tl-none flex gap-1 items-center h-12">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="mt-4 pt-4 border-t border-white/5 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta aquí..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-electric-cyan/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 mt-2 w-10 h-10 bg-electric-cyan text-black rounded-lg flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50"
                >
                  <Send size={18} className={input.trim() ? "translate-x-0.5" : ""} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
