import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#000814] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-electric-cyan transition-colors mb-12 uppercase tracking-widest text-xs font-black">
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-16 border-l-4 border-electric-cyan pl-6">
          Política de Cookies
        </h1>

        <div className="space-y-12 text-white/70 font-light leading-relaxed">
          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              I. Uso de Tecnologías de Seguimiento
            </h2>
            <p>
              En Labs24k y Evolvix Global S.L. utilizamos tecnologías de rastreo y cookies de sesión estrictamente para mantener el correcto funcionamiento técnico de la plataforma y garantizar la seguridad en los procesos de cualificación y postulación.
            </p>
          </section>

          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              II. Cookies de Terceros y Analíticas
            </h2>
            <p>
              Con el objetivo de medir el rendimiento de nuestras campañas de expansión, este sitio utiliza servicios analíticos que pueden almacenar cookies en su navegador. La continuación de la navegación asume la aceptación implícita de esta operativa técnica. Puede configurar su navegador para bloquear o ser alertado sobre estas cookies, aunque algunas partes del sitio podrían no funcionar correctamente.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
