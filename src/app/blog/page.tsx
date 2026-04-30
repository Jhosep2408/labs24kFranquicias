import React, { Suspense } from "react";
import { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
import { BlogFilters } from "@/components/sections/blog/BlogFilters";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { Newsletter } from "@/components/sections/blog/Newsletter";
import { BlogCTA } from "@/components/sections/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Blog & Insights | Labs 24K",
  description: "Insights y Estrategias en Inteligencia Artificial. Contenido para líderes que quieren dominar el mercado con IA.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#000d1a] text-white">
      {/* Blog Hero with Search */}
      <Suspense fallback={<div className="h-20" />}>
        <BlogHero />
      </Suspense>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Featured Article */}
        <FeaturedPost />

        {/* Filters and List */}
        <div className="mt-20">
          <Suspense fallback={<div className="h-40 flex items-center justify-center">Cargando artículos...</div>}>
            <BlogFilters />
            <BlogGrid />
          </Suspense>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Final CTA */}
      <BlogCTA />
    </main>
  );
}
