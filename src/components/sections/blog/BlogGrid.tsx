"use client";

import React, { useMemo } from "react";
import { BlogCard } from "@/components/ui/BlogCard";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    category: "IA para empresas",
    title: "El impacto de los LLMs en la optimización de recursos humanos",
    description: "Descubre cómo los grandes modelos de lenguaje están transformando el reclutamiento, la capacitación y la gestión del talento en corporaciones de más de 500 empleados.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    readTime: "5 min"
  },
  {
    id: 2,
    category: "Industria 4.0",
    title: "Mantenimiento predictivo: La nueva frontera industrial",
    description: "Análisis de cómo la implementación de sensores IoT conectados a redes neuronales puede anticipar fallas críticas de maquinaria con un 98% de precisión.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min"
  },
  {
    id: 3,
    category: "Casos de éxito",
    title: "Cómo la franquicia X triplicó sus ventas usando IA predictiva",
    description: "Un caso de estudio detallado sobre la implementación de algoritmos de predicción de demanda para optimizar inventarios y reducir mermas en un 60%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    readTime: "10 min"
  },
  {
    id: 4,
    category: "Tendencias",
    title: "Privacidad de datos en la era de los agentes autónomos",
    description: "Las nuevas normativas globales exigen a las empresas adaptar sus sistemas de inteligencia artificial para garantizar el cumplimiento normativo sin perder competitividad.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    readTime: "6 min"
  },
  {
    id: 5,
    category: "Automatización",
    title: "Flujos de trabajo híbridos: Humanos y algoritmos colaborando",
    description: "La estrategia definitiva para integrar sistemas autónomos en su equipo de trabajo, elevando la moral de los empleados al eliminar tareas repetitivas.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min"
  },
  {
    id: 6,
    category: "IA para empresas",
    title: "ROI en IA: Cómo medir el impacto financiero real",
    description: "Framework práctico para directores financieros (CFOs) sobre cómo calcular, proyectar y auditar el retorno de inversión de proyectos tecnológicos complejos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    readTime: "9 min"
  }
];

export function BlogGrid() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const category = searchParams.get("category");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = !category || category === "Todos" || post.category === category;
      const matchesQuery = !query || 
                           post.title.toLowerCase().includes(query) || 
                           post.description.toLowerCase().includes(query) ||
                           post.category.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  if (filteredPosts.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-center py-20 flex flex-col items-center"
      >
        <div className="text-white/40 mb-4 text-6xl">🔍</div>
        <h3 className="text-xl font-bold text-white mb-2">No se encontraron artículos</h3>
        <p className="text-white/60 mb-6 max-w-md mx-auto">
          No hay resultados para tu búsqueda actual. Intenta con otros términos o limpia los filtros.
        </p>
        <button 
          onClick={() => window.location.href = '/blog'}
          className="px-6 py-3 bg-electric text-black text-sm font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(32,236,252,0.3)]"
        >
          Limpiar filtros y búsqueda
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post, idx) => (
        <BlogCard
          key={post.id}
          {...post}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
}
