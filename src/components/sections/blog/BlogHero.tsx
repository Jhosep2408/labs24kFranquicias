"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function BlogHero() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [matchIndex, setMatchIndex] = useState(0);
  const [currentMatches, setCurrentMatches] = useState<Element[]>([]);

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const scrollToNextMatch = () => {
    if (!searchQuery.trim()) return;

    // Obtener todos los elementos que podrían contener texto
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, span, li, a');
    const matches: Element[] = [];
    const query = searchQuery.toLowerCase();
    
    elements.forEach(el => {
      // Solo elementos que contienen el texto y no tienen hijos (para no agarrar contenedores grandes)
      if (el.textContent?.toLowerCase().includes(query) && el.children.length === 0) {
        matches.push(el);
      }
    });

    if (matches.length > 0) {
      // Ciclo a través de los resultados
      const nextIndex = matches.length === currentMatches.length ? (matchIndex + 1) % matches.length : 0;
      
      const target = matches[nextIndex];
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Resaltado temporal profesional (flash de color cyan)
      const originalBg = (target as HTMLElement).style.backgroundColor;
      (target as HTMLElement).style.backgroundColor = 'rgba(32, 236, 252, 0.4)';
      (target as HTMLElement).style.transition = 'background-color 0.3s ease';
      
      setTimeout(() => {
        (target as HTMLElement).style.backgroundColor = originalBg;
      }, 1500);

      setMatchIndex(nextIndex);
      setCurrentMatches(matches);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Filtrar artículos en la lista
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    // 2. Saltar a la palabra en el texto
    scrollToNextMatch();
  };

  return (
    <section className="relative pt-28 pb-16 px-6 md:px-12 bg-transparent border-b border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#20ecfc"
          colorTwo="#3B82F6"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.3}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={true}
        />
      </div>

      {/* Decorative abstract elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-[10px] font-black uppercase tracking-widest mb-6 border border-electric/30">
            <span>Portal de Conocimiento</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6 pr-10 overflow-visible">
            Insights y Estrategias en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-300 to-blue-500">
              Inteligencia Artificial
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Contenido exclusivo diseñado para líderes y directores que buscan dominar su mercado implementando las últimas tendencias en IA corporativa.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50 group-focus-within:text-electric transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, casos de éxito o estrategias..."
              className="block w-full pl-12 pr-4 py-4 md:py-5 border border-white/10 rounded-2xl leading-5 bg-white/5 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-white text-base shadow-sm backdrop-blur-sm"
            />
            <div className="absolute inset-y-2 right-2">
              <button type="submit" className="px-6 py-2 md:py-3 bg-electric text-black text-sm font-black uppercase tracking-wider rounded-xl hover:bg-white transition-colors h-full shadow-[0_0_20px_rgba(32,236,252,0.3)]">
                Buscar
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
