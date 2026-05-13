import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AvisoLegalPage() {
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
          Aviso Legal
        </h1>

        <div className="space-y-12 text-white/70 font-light leading-relaxed">
          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              I. Régimen de Titularidad y Concesión de Licencias
            </h2>
            <p>
              El presente portal constituye el canal oficial de adjudicación de activos comerciales de la marca Labs24k, cuya propiedad intelectual, industrial y know-how se encuentran radicados de forma exclusiva en el patrimonio social de <strong className="text-white">Evolvix Global S.L. (NIF B21779673)</strong>. Cualquier interacción con este sitio web se rige por los protocolos de confidencialidad y reserva de dominio del Grupo, con sede estatutaria en Paseo de la Castellana, 95, planta 22, 28046 Madrid.
            </p>
          </section>

          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              II. Blindaje de Exclusividad Territorial
            </h2>
            <p className="mb-4">
              La información relativa a la disponibilidad de zonas geográficas y modelos de rentabilidad constituye información clasificada como "Secreto de Empresa" bajo la Ley 1/2019. 
            </p>
            <p className="mb-4">
              <strong className="text-white">Evolvix Global S.L.</strong> se reserva el derecho de rescindir unilateralmente cualquier proceso de negociación ante el uso indebido o la divulgación no autorizada de las metodologías operativas aquí expuestas. 
            </p>
            <p>
              El acceso a la web no otorga derecho alguno sobre el modelo de negocio, cuya explotación queda supeditada a la firma de un contrato de concesión de licencia en exclusiva.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
