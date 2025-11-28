"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import RaspberryPiOBJ from "./RaspberryPiOBJ";

const features = [
  {
    title: "El Cerebro del Sistema",
    description: "Raspberry Pi 4 con 4GB de RAM. No es solo hardware, es el núcleo de una solución educativa completa.",
    highlight: "Procesamiento Inteligente",
  },
  {
    title: "Conectividad Total",
    description: "WiFi, Bluetooth y módulo satelital integrado. Acceso a internet incluso en las zonas más remotas.",
    highlight: "Siempre Conectado",
  },
  {
    title: "Energía Sostenible",
    description: "Panel solar de 100W con batería de respaldo. Funciona 24/7 sin depender de la red eléctrica.",
    highlight: "Autonomía Completa",
  },
];

export default function RaspberryScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky 3D Canvas */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 2, 6]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <RaspberryPiOBJ scrollProgress={scrollYProgress} />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Scrolling Text Content */}
      <div className="relative z-10 pointer-events-none">
        {features.map((feature, index) => {
          const rangeStart = index / features.length;
          const rangeEnd = (index + 1) / features.length;
          const textOpacity = useTransform(
            scrollYProgress,
            [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd],
            [0, 1, 1, 0]
          );

          return (
            <div key={index} className="h-screen flex items-center justify-center px-4">
              <motion.div
                style={{ opacity: textOpacity }}
                className="max-w-2xl text-center pointer-events-auto"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4">
                  {feature.highlight}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {feature.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
