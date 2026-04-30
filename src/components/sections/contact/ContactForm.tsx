"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el mensaje.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      
      // Volver a estado idle después de 5 segundos
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Error de red. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/[0.02] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden glass"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-electric/10 blur-[100px] rounded-full pointer-events-none" />

      <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-wide">
        Envíanos un mensaje
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-white/60 ml-1">
              Nombre Completo *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#000d1a]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all placeholder:text-white/20"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-white/60 ml-1">
              Correo Electrónico *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#000d1a]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all placeholder:text-white/20"
              placeholder="juan@empresa.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-white/60 ml-1">
              Teléfono *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#000d1a]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all placeholder:text-white/20"
              placeholder="+34 600 000 000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-white/60 ml-1">
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#000d1a]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all placeholder:text-white/20"
              placeholder="Ej. TechCorp (Opcional)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-white/60 ml-1">
            ¿Cómo podemos ayudarte? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#000d1a]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all placeholder:text-white/20 resize-none"
            placeholder="Describe brevemente tus necesidades o los retos de tu empresa..."
          />
        </div>

        {/* Feedback Messages */}
        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-green-500 font-bold text-sm">¡Mensaje enviado con éxito!</p>
              <p className="text-green-500/80 text-xs mt-1">Nuestro equipo se pondrá en contacto contigo en breve.</p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
            <AlertCircle className="text-red-500 mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-red-500 font-bold text-sm">Error al enviar el mensaje</p>
              <p className="text-red-500/80 text-xs mt-1">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full py-4 bg-electric text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(32,236,252,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Enviando...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 size={20} />
              Enviado
            </>
          ) : (
            <>
              Enviar Mensaje
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
