"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { LogoOfficial } from "../common/LogoOfficial";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  { name: "Sectores", href: "#sectores" },
  { name: "Inversión", href: "#invertir" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-10 md:py-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "w-full max-w-7xl px-2 md:px-4 py-1 rounded-full border border-white/10 backdrop-blur-xl flex items-center justify-between transition-all pointer-events-auto",
          scrolled ? "bg-black-rich/60 shadow-[0_0_40px_rgba(32,236,252,0.1)] border-electric-cyan/20" : "bg-black-rich/30"
        )}
      >
        {/* Logo Container */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-14 h-14 md:w-20 md:h-20 bg-white/5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover:border-electric-cyan/50 group-hover:shadow-[0_0_20px_rgba(32,236,252,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full text-white relative z-10 flex items-center justify-center">
              <LogoOfficial />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white leading-none">
              LABS<span className="text-electric-cyan">24K</span>
            </span>
            <span className="text-[10px] md:text-xs font-medium text-white/50 tracking-[0.2em] uppercase">
              Franquicias
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-electric-cyan transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-cyan transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-electric-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md z-[60] pointer-events-auto"
            />
            
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#000814] border-l border-white/10 z-[70] p-6 shadow-2xl flex flex-col pointer-events-auto"
            >
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-full border border-electric-cyan/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(32,236,252,0.15)]">
                    <LogoOfficial />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold tracking-tighter text-white leading-none">
                      LABS<span className="text-electric-cyan">24K</span>
                    </span>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 hover:bg-electric-cyan/20 rounded-full text-white hover:text-electric-cyan transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-4 border-b border-white/5 text-xl font-light text-white/80 hover:text-electric-cyan transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {item.name}
                      </span>
                      <ChevronRight size={18} className="text-white/20 group-hover:text-electric-cyan group-hover:-translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navItems.length * 0.05 }}
                className="mt-auto pt-10"
              >
                 <Link href="/contacto" onClick={() => setIsOpen(false)}>
                   <button className="w-full py-4 bg-electric-cyan text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(32,236,252,0.2)]">
                     Contactar Ahora
                   </button>
                 </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
