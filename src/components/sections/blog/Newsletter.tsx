"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        name: "Suscriptor de Newsletter",
        email: email,
        phone: "N/A",
        company: "Newsletter",
        message: "Deseo suscribirme al boletín semanal de estrategias de IA."
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Error enviando");

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Hubo un error al procesar tu suscripción. Inténtalo de nuevo.");
    }
  };

  return (
    <section className="py-20 bg-[#001226] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,236,252,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden glass"
        >
          {/* Decals */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-electric/30 text-electric shadow-[0_0_15px_rgba(32,236,252,0.2)]">
              {status === "success" ? <CheckCircle2 size={32} /> : <Mail size={32} />}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 pr-4 overflow-visible uppercase italic">
              {status === "success" 
                ? <span className="text-electric">¡Suscripción Exitosa!</span>
                : <>Recibe estrategias de IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">cada semana</span></>
              }
            </h2>
            
            <p className="text-white/70 text-lg font-light mb-10">
              {status === "success" 
                ? "Te hemos añadido a nuestra lista. Pronto empezarás a recibir nuestro análisis exclusivo directamente en tu bandeja de entrada."
                : "Únase a más de 10,000 líderes empresariales que ya están transformando sus operaciones con nuestro análisis exclusivo."
              }
            </p>

            {status !== "success" && (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Su correo corporativo"
                  required
                  className="flex-grow px-6 py-4 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent text-white bg-[#000d1a]/50 shadow-inner placeholder-white/40 backdrop-blur-md"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-electric text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(32,236,252,0.3)] flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <><Loader2 size={20} className="animate-spin" /> Procesando...</>
                  ) : (
                    <>Suscribirse <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
            
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-6 font-bold">
              Al suscribirse, acepta nuestras políticas de privacidad. Cero spam, solo valor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
