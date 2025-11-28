"use client";

import { motion } from "framer-motion";
import { Cpu, HardDrive, Zap, Wifi, Monitor, Package } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    category: "Procesador",
    items: [
      { label: "Modelo", value: "Raspberry Pi 4 Model B" },
      { label: "RAM", value: "4GB LPDDR4" },
      { label: "CPU", value: "Quad-core Cortex-A72 (ARM v8) 64-bit @ 1.5GHz" },
    ],
  },
  {
    icon: HardDrive,
    category: "Almacenamiento",
    items: [
      { label: "Tipo", value: "MicroSD Card" },
      { label: "Capacidad", value: "128GB Clase 10" },
      { label: "Sistema", value: "Raspberry Pi OS + Software Educativo" },
    ],
  },
  {
    icon: Zap,
    category: "Energía",
    items: [
      { label: "Panel Solar", value: "100W Monocristalino" },
      { label: "Batería", value: "12V 20Ah Litio" },
      { label: "Autonomía", value: "Hasta 48 horas sin sol" },
    ],
  },
  {
    icon: Wifi,
    category: "Conectividad",
    items: [
      { label: "Internet", value: "Módulo Satelital 4G/LTE" },
      { label: "WiFi", value: "802.11ac Dual Band" },
      { label: "Bluetooth", value: "5.0 BLE" },
    ],
  },
  {
    icon: Monitor,
    category: "Salida de Video",
    items: [
      { label: "Puertos", value: "2x Micro HDMI" },
      { label: "Resolución", value: "Hasta 4K @ 60Hz" },
      { label: "Audio", value: "3.5mm Jack + HDMI" },
    ],
  },
  {
    icon: Package,
    category: "Dimensiones",
    items: [
      { label: "Peso Total", value: "~3.5 kg (sistema completo)" },
      { label: "Case", value: "Resistente al agua IP65" },
      { label: "Temperatura", value: "-10°C a 50°C operación" },
    ],
  },
];

export default function TechSpecs() {
  return (
    <section id="specs" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Especificaciones Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hardware profesional diseñado para entornos rurales exigentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <spec.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-gray-900 text-sm font-semibold text-right ml-4">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
