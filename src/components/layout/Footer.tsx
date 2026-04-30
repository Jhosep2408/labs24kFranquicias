import React from "react";
import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-pure border-t border-white/5 pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-electric-cyan rounded flex items-center justify-center text-black font-black text-sm">24</div>
              <span className="text-xl font-black tracking-tighter font-heading text-white">LABS 24K</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Liderando la revolución de la Inteligencia Artificial global. Transformamos mercados a través de tecnología disruptiva y socios visionarios.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-electric-cyan hover:text-electric-cyan transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-electric-cyan hover:text-electric-cyan transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-electric-cyan hover:text-electric-cyan transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-electric-cyan font-bold uppercase tracking-widest text-xs mb-8">Navegación</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Centros de Excelencia</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Perfil del Socio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Inversión y Retorno</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog Tech</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-electric-cyan font-bold uppercase tracking-widest text-xs mb-8">Soluciones IA</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Agentes Autónomos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automatización RPA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integración Custom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IA para Pymes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gobernanza de Datos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-electric-cyan font-bold uppercase tracking-widest text-xs mb-8">Contacto Global</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-electric-cyan shrink-0" />
                <span>C. Marqués de San Esteban, 3, Gijón</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-electric-cyan shrink-0" />
                <span>info@labs24kfranquicias.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-electric-cyan shrink-0" />
                <span>+34 984 25 23 61</span>
              </li>
              <li className="flex items-center gap-3 mt-4 text-electric-cyan font-bold">
                <Globe size={18} />
                <span>Presencia en +40 países</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <div>© {currentYear} Labs 24K Global AI Franchise. Todos los derechos reservados.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
