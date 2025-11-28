"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Aula Digital Rural
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="#producto" className="hover:text-gray-900 transition-colors">
            Producto
          </Link>
          <Link href="#specs" className="hover:text-gray-900 transition-colors">
            Especificaciones
          </Link>
          <Link href="#contacto" className="hover:text-gray-900 transition-colors">
            Contacto
          </Link>
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Cotizar
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
