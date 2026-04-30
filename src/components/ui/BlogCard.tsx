"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  delay?: number;
}

export function BlogCard({ category, title, description, image, readTime, delay = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:border-electric/30 transition-all duration-300 flex flex-col h-full hover:bg-white/[0.04]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#000d1a]/80 backdrop-blur-md text-electric text-[10px] font-black uppercase tracking-wider rounded-md border border-white/10 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex items-center gap-1.5 text-xs text-white/50 mb-3 font-medium">
          <Clock size={14} />
          <span>{readTime} de lectura</span>
        </div>

        <h3 className="text-xl font-black text-white leading-snug mb-3 group-hover:text-electric transition-colors pr-2 uppercase italic">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed font-light mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/10">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-electric text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            Leer artículo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
