"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  { name: "Raspberry Pi 4 Model B (4GB)", quantity: 1 },
  { name: "MicroSD Card 128GB con OS preinstalado", quantity: 1 },
  { name: "Panel Solar 100W Monocristalino", quantity: 1 },
  { name: "Batería 12V 20Ah Litio", quantity: 1 },
  { name: "Módulo de Conectividad Satelital", quantity: 1 },
  { name: "Case Resistente al Agua IP65", quantity: 1 },
  { name: "Fuente de Poder USB-C 5V/3A", quantity: 1 },
  { name: "Cable HDMI", quantity: 2 },
  { name: "Cable USB-C", quantity: 1 },
  { name: "Cables de Conexión Solar", quantity: 1 },
  { name: "Teclado y Mouse USB", quantity: 1 },
  { name: "Manual de Instalación", quantity: 1 },
];

export default function WhatsInTheBox() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Qué incluye?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo necesario para implementar el sistema. Listo para usar desde el primer día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{item.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 text-green-700 font-semibold">
            <Check className="w-5 h-5" />
            Garantía de 2 años incluida
          </div>
        </motion.div>
      </div>
    </section>
  );
}
