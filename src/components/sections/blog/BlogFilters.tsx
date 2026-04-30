"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const categories = [
  "Todos",
  "IA para empresas",
  "Industria 4.0",
  "Automatización",
  "Casos de éxito",
  "Tendencias"
];

export function BlogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [active, setActive] = useState("Todos");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActive(categoryParam);
    } else {
      setActive("Todos");
    }
  }, [searchParams]);

  const handleFilter = (category: string) => {
    setActive(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "Todos") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-10 overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex items-center gap-3 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`relative px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-300 border overflow-hidden ${
              active === category
                ? "text-black border-transparent"
                : "text-white/60 border-white/10 hover:border-electric/50 hover:text-white bg-white/5"
            }`}
          >
            {active === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-electric rounded-full z-0 shadow-[0_0_20px_rgba(32,236,252,0.3)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
