"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    id: "email",
    title: "Email Corporativo",
    value: "info@labs24kfranquicias.com",
    icon: Mail,
    action: "mailto:info@labs24kfranquicias.com",
    description: "Soporte general, ventas y prensa."
  },
  {
    id: "whatsapp",
    title: "WhatsApp Directo",
    value: "+34 984 25 23 61",
    icon: MessageCircle,
    action: "https://wa.me/34984252361?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Labs%2024K.",
    description: "Atención inmediata para clientes e inversores."
  },
  {
    id: "location",
    title: "Sede Central",
    value: "C. Marqués de San Esteban, 3, Gijón, Asturias",
    icon: MapPin,
    action: "https://maps.google.com/?q=C.+Marqués+de+San+Esteban,+3,+Centro,+33206+Gijón,+Asturias",
    description: "Operaciones globales y desarrollo tecnológico."
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactMethods.map((method, idx) => (
        <motion.div
          key={method.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Link href={method.action} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-electric/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/5 to-electric/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#000d1a] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-electric/50 group-hover:text-electric text-white/50 transition-colors shadow-sm">
                  <method.icon size={20} />
                </div>
                
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-electric mb-1">
                    {method.title}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {method.value}
                  </h4>
                  <p className="text-white/50 text-xs font-light">
                    {method.description}
                  </p>
                </div>
                
                <div className="shrink-0 text-white/20 group-hover:text-electric transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 w-full relative shadow-lg"
      >
        <iframe
          src="https://maps.google.com/maps?q=Calle%20Marqu%C3%A9s%20de%20San%20Esteban,%203,%20Gij%C3%B3n&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0"
        ></iframe>
      </motion.div>
    </div>
  );
}
