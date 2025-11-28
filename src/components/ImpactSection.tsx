"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const stats = [
  { label: "Estudiantes Impactados", value: "5,000+" },
  { label: "Escuelas Conectadas", value: "120" },
  { label: "Comunidades Activas", value: "45" },
  { label: "Horas de Aprendizaje", value: "1M+" },
];

export default function ImpactSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Impacto Real.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Llevando oportunidades donde más se necesitan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="text-center border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
