import React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contacto | Labs 24K",
  description: "Contacta con el equipo de Labs 24K para liderar tu sector implementando Inteligencia Artificial.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#000d1a] text-white">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-white mb-4 uppercase italic">
                Estamos aquí para <span className="text-electric">ayudarte</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Utiliza cualquiera de nuestros canales directos o rellena el formulario. Nuestro equipo de respuesta prioritaria te contactará en menos de 24 horas hábiles.
              </p>
            </div>

            <ContactInfo />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}
