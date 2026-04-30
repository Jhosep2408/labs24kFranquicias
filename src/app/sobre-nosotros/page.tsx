"use client";

import React from "react";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { CompanyMuscle } from "@/components/sections/about/CompanyMuscle";
import { BusinessOpportunity } from "@/components/sections/about/BusinessOpportunity";
import { CompetitiveAdvantage } from "@/components/sections/about/CompetitiveAdvantage";
import { GlobalPresence } from "@/components/sections/about/GlobalPresence";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { LeadForm } from "@/components/sections/LeadForm";

export default function SobreNosotros() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Hero Corporativo */}
      <AboutHero />

      {/* 2. Quiénes Somos */}
      <WhoWeAre />

      {/* 3. Misión y Visión */}
      <MissionVision />

      {/* 4. El Músculo de la Empresa (Métricas) */}
      <CompanyMuscle />

      {/* 5. Oportunidad de Negocio */}
      <BusinessOpportunity />

      {/* 6. Diferencial Competitivo */}
      <CompetitiveAdvantage />

      {/* 7. Presencia Global */}
      <GlobalPresence />

      {/* 8. CTA Final */}
      <AboutCTA />

      {/* 9. Formulario de Captación */}
      <div id="contact-form">
        <LeadForm />
      </div>
    </main>
  );
}
