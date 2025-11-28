"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "2,200",
    description: "Ideal para escuelas pequeñas que inician su transformación digital",
    features: [
      "1x Raspberry Pi 4 (4GB RAM)",
      "Panel Solar 50W",
      "Batería 12V 10Ah",
      "Conectividad WiFi",
      "128GB Almacenamiento",
      "Software Educativo Básico",
      "Soporte por Email",
      "Garantía 1 año",
    ],
    popular: false,
  },
  {
    name: "Profesional",
    price: "2,800",
    description: "La opción más completa para instituciones comprometidas",
    features: [
      "1x Raspberry Pi 4 (4GB RAM)",
      "Panel Solar 100W",
      "Batería 12V 20Ah",
      "Conectividad Satelital 4G/LTE",
      "256GB Almacenamiento",
      "Software Educativo Completo",
      "Soporte Prioritario 24/7",
      "Garantía 2 años",
      "Capacitación Incluida",
      "Actualizaciones Gratis",
    ],
    popular: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Soluciones a medida para redes educativas y gobiernos",
    features: [
      "Múltiples Raspberry Pi",
      "Sistema Solar Escalable",
      "Red Mesh Integrada",
      "Servidor Central",
      "Dashboard de Gestión",
      "Software Personalizado",
      "Soporte Dedicado",
      "Garantía Extendida",
      "Implementación On-site",
      "Consultoría Incluida",
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Elige tu plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones flexibles para cada necesidad. Todos los planes incluyen el sistema completo listo para usar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200 text-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-yellow-400 text-gray-900 text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  {plan.price !== "Personalizado" && (
                    <span className="text-sm font-semibold">$</span>
                  )}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Personalizado" && (
                    <span className={`text-sm ${plan.popular ? "text-blue-200" : "text-gray-500"}`}>
                      USD
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? "text-blue-200" : "text-blue-600"
                    }`} />
                    <span className={`text-sm ${plan.popular ? "text-blue-50" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.price === "Personalizado" ? "Contactar Ventas" : "Solicitar Cotización"}
              </button>
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
          <p className="text-gray-600 mb-4">
            ¿Necesitas más de 10 unidades? Contáctanos para descuentos por volumen
          </p>
          <a href="#contacto" className="text-blue-600 font-semibold hover:text-blue-700">
            Hablar con un especialista →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
