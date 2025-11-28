"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Wifi } from "lucide-react";

export default function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Todo en un solo sistema
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hardware completo listo para implementar. Raspberry Pi 4, energía solar, 
            conectividad satelital y todo lo necesario para transformar la educación rural.
          </p>
        </motion.div>

        {/* Product Visual */}
        <div className="relative">
          <motion.div
            style={{ y }}
            className="relative z-10"
          >
            {/* Main Product Image Placeholder */}
            <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <div className="text-center p-12">
                <Cpu className="w-32 h-32 text-blue-500 mx-auto mb-6" />
                <p className="text-2xl font-semibold text-gray-700">
                  Sistema Raspberry Pi 4
                </p>
                <p className="text-gray-500 mt-2">
                  Imagen del producto aquí
                </p>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-10 -left-4 md:left-0 glass rounded-2xl p-6 max-w-xs shadow-xl"
            >
              <Cpu className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Raspberry Pi 4</h3>
              <p className="text-sm text-gray-600">
                4GB RAM, procesamiento potente para aplicaciones educativas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-40 -right-4 md:right-0 glass rounded-2xl p-6 max-w-xs shadow-xl"
            >
              <Zap className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Energía Solar</h3>
              <p className="text-sm text-gray-600">
                Panel solar de 100W con batería de respaldo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 glass rounded-2xl p-6 max-w-xs shadow-xl"
            >
              <Wifi className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Conectividad</h3>
              <p className="text-sm text-gray-600">
                Internet satelital de alta velocidad incluido
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
