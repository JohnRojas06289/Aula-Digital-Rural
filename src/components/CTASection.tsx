"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para transformar la educación rural?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Solicita una cotización personalizada o agenda una demostración del sistema
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 bg-white/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cantidad de Unidades</label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-semibold py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contacto@auladigitalrural.com" className="text-blue-100 hover:text-white">
                      contacto@auladigitalrural.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <a href="tel:+573001234567" className="text-blue-100 hover:text-white">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-blue-100">
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 bg-white/10">
              <h4 className="font-bold text-lg mb-3">Precio Estimado</h4>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">$2,500</span>
                <span className="text-blue-100">USD por unidad</span>
              </div>
              <p className="text-sm text-blue-100">
                * Precio puede variar según cantidad y personalización
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
