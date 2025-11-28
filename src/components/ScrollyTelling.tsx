"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "./GlassCard";
import { Wifi, BookOpen, Sun } from "lucide-react";

const features = [
  {
    title: "Conectividad Total",
    description: "Internet satelital de alta velocidad para romper la brecha digital.",
    icon: Wifi,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Educación Sin Límites",
    description: "Acceso a miles de recursos educativos offline y online.",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Sostenibilidad",
    description: "Energía 100% solar para funcionar en cualquier lugar.",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black" />
        
        <div className="relative w-full max-w-6xl flex items-center justify-center px-4">
             {/* Dynamic Visual */}
             <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                {features.map((feature, index) => {
                    const rangeStart = index / features.length;
                    const rangeEnd = (index + 1) / features.length;
                    const opacity = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
                    const scale = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0.8, 1, 1, 0.8]);
                    
                    return (
                        <motion.div 
                            key={index}
                            style={{ opacity, scale }}
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} blur-3xl opacity-40`}
                        />
                    );
                })}
                
                {features.map((feature, index) => {
                     const rangeStart = index / features.length;
                     const rangeEnd = (index + 1) / features.length;
                     const opacity = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
                     
                     return (
                        <motion.div key={index} style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
                            <feature.icon className="w-32 h-32 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        </motion.div>
                     )
                })}
             </div>
        </div>
      </div>

      <div className="relative z-10">
        {features.map((feature, index) => (
          <div key={index} className="h-screen flex items-center justify-center md:justify-end px-4 md:px-20 pointer-events-none">
            <GlassCard className="max-w-md w-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/10 pointer-events-auto transform transition-transform hover:scale-105">
              <feature.icon className="w-8 h-8 mb-4 text-white/80" />
              <h3 className="text-4xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-xl text-gray-300 leading-relaxed">{feature.description}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
