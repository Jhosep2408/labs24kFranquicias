import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>

        <div className="space-y-12 text-white/70 font-light leading-relaxed">
          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              I. Custodia de Perfiles Patrimoniales y Filtrado Algorítmico
            </h2>
            <p>
              En cumplimiento del RGPD, se informa que el responsable del tratamiento de los datos captados es <strong className="text-white">Evolvix Global S.L.</strong> El flujo de información recabado a través de los formularios de "Solicitud de Exclusividad" tiene como objeto exclusivo la evaluación de la solvencia técnica y financiera del postulante para su integración en el ecosistema de Labs24k.
            </p>
          </section>

          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              II. Legitimación por Interés Pre-Contractual y Seguridad del Grupo
            </h2>
            <p>
              La base jurídica que ampara el tratamiento es la aplicación de medidas pre-contractuales a petición del interesado. Los datos podrán ser sometidos a procesos de validación interna por parte de los servicios jurídicos de Evolvix Global S.L. con el fin de garantizar la integridad de la red de franquiciados y la protección de los intereses del Grupo.
            </p>
          </section>

          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              III. Estanqueidad de la Información de Inversión
            </h2>
            <p>
              Dada la naturaleza crítica de la información tratada (planes de expansión y capacidades financieras), Evolvix Global S.L. garantiza la estanqueidad de los registros en servidores de alta seguridad, impidiendo cualquier forma de indexación o cesión externa no vinculada estrictamente al proceso de adjudicación de la franquicia.
            </p>
          </section>

          <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <h2 className="text-xl text-electric-cyan font-black uppercase tracking-widest mb-6">
              IV. Protocolo de Ejercicio de Derechos ARCO
            </h2>
            <p>
              Para iniciar cualquier trámite de revocación, limitación o supresión de registros de postulante, se deberá remitir solicitud formal al canal centralizado: <a href="mailto:info@labs24kfranquicias.com" className="text-electric-cyan hover:underline">info@labs24kfranquicias.com</a>. La resolución de dicha solicitud quedará supeditada a la verificación fehaciente de la identidad del solicitante y a las obligaciones de conservación documental que la normativa mercantil impone al Grupo.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
