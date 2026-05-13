"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  MapPin 
} from "lucide-react";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    investment: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const message = `Aplicación de Socio (Lead Form)\n\nPaís de Interés: ${formData.country}\nNivel de Inversión Estimado: ${formData.investment}`;
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: "Lead de Inversión",
        message: message
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Error enviando el mensaje");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", country: "", investment: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.");
    }
  };

  if (status === "success") {
    return (
      <section id="contacto" className="py-24 px-6 md:px-12 bg-[#000d1a] flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full glass p-12 rounded-[2.5rem] border-electric-cyan/30 text-center"
        >
          <div className="w-20 h-20 bg-electric-cyan rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(32,236,252,0.4)]">
            <CheckCircle2 size={40} className="text-black" />
          </div>
          <h2 className="text-4xl font-black uppercase italic font-heading mb-4 text-white">Solicitud Recibida</h2>
          <p className="text-white/60 text-lg mb-8">
            Su aplicación de socio ha sido registrada. Un consultor de inversión senior se pondrá en contacto con usted en las próximas 24 horas para programar una reunión estratégica.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="text-electric-cyan font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Volver al formulario
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="expansion" className="py-16 md:py-24 px-6 md:px-12 bg-[#001226] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,236,252,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-electric-cyan font-black uppercase tracking-[0.2em] text-[10px] mb-3">El Filtro</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic font-heading mb-6 leading-[1.1] text-white">
            No buscamos empleados. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan via-blue-300 to-blue-500">Buscamos dueños de zona.</span>
          </h2>
          <p className="text-white/80 text-base md:text-xl mb-8 max-w-lg leading-relaxed font-light border-l-2 border-electric-cyan pl-6">
            <strong className="text-white">Labs24k solo otorga una licencia por demarcación territorial.</strong> Buscamos perfiles con visión empresarial, no necesariamente técnicos. Si cumples los requisitos, te entregamos el monopolio de la IA en tu ciudad.
          </p>

          <div className="space-y-6 hidden md:block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-electric-cyan" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-normal md:tracking-tight italic">Exclusividad Garantizada</h4>
                <p className="text-white/40 text-sm">Bloqueo territorial inmediato tras la firma del acuerdo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center shrink-0">
                <MapPin className="text-electric-cyan" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-normal md:tracking-tight italic">Entrevista Directa</h4>
                <p className="text-white/40 text-sm">Las solicitudes aprobadas pasan a entrevista con Dirección General.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-electric-cyan/5 blur-3xl rounded-full -z-10" />
          <form 
            onSubmit={handleSubmit}
            className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-white/10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Nombre y Apellidos</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Alexander Noble"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-electric-cyan/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@empresa.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-electric-cyan/50 transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Teléfono</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-electric-cyan/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-electric-cyan ml-1">¿Qué zona deseas liderar?</label>
                <input 
                  required
                  name="country"
                  type="text" 
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Ciudad o Código Postal"
                  className="w-full bg-white/[0.03] border border-electric-cyan/30 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-electric-cyan transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-[10px] font-black uppercase tracking-widest text-electric-cyan ml-1">¿Dispones de la inversión mínima (50.000€)?</label>
              <select 
                required
                name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="w-full bg-white/[0.03] border border-electric-cyan/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-electric-cyan transition-all appearance-none cursor-pointer text-sm"
              >
                <option value="" className="bg-[#001226] text-white/20">Seleccione una opción...</option>
                <option value="Si, dispongo de capital propio" className="bg-[#001226] text-white">Sí, dispongo de capital propio.</option>
                <option value="Si, con financiacion" className="bg-[#001226] text-white">Sí, con vía de financiación abierta.</option>
                <option value="No por ahora" className="bg-[#001226] text-white">No por el momento.</option>
              </select>
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">¿Por qué Labs24k debería elegirte a ti?</label>
              <textarea 
                required
                name="reason"
                rows={3}
                placeholder="Cuéntanos brevemente tu experiencia empresarial y tu ambición..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-electric-cyan/50 transition-all resize-none text-sm"
              />
            </div>

            <button 
              disabled={status === "submitting"}
              type="submit"
              className="w-full bg-electric-cyan text-black py-6 rounded-sm font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(32,236,252,0.2)]"
            >
              {status === "submitting" ? (
                <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Enviar Solicitud de Zona
                  <Send size={20} />
                </>
              )}
            </button>

            <p className="text-center text-[10px] md:text-xs text-white/40 mt-6 uppercase tracking-widest leading-relaxed border-t border-white/10 pt-6">
              Al remitir esta solicitud, usted reconoce que está iniciando un proceso de cualificación para acceder a una licencia de explotación de marca propiedad de Evolvix Global S.L. El envío de los datos no implica la concesión de derecho alguno, quedando la adjudicación de la zona supeditada a la aprobación final del comité de expansión del Grupo en Paseo de la Castellana 95, Madrid.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
