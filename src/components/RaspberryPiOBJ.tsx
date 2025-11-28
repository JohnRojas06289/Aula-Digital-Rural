"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RaspberryPiOBJ({ scrollProgress }: { scrollProgress: any }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress.get() * Math.PI * 2;
      groupRef.current.rotation.x = Math.sin(scrollProgress.get() * Math.PI) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Main PCB Board */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 0.08, 2.8]} />
        <meshStandardMaterial color="#1a5f3a" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Raspberry Pi Logo Area (lighter green) */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3.3, 0.02, 2.6]} />
        <meshStandardMaterial color="#2d7a4f" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* GPIO Pins (40 pins) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <group key={`gpio-${i}`}>
          <mesh position={[-1.4, 0.12, -1 + i * 0.1]}>
            <cylinderGeometry args={[0.02, 0.02, 0.15]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[-1.3, 0.12, -1 + i * 0.1]}>
            <cylinderGeometry args={[0.02, 0.02, 0.15]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* CPU/SoC (Broadcom chip) */}
      <mesh position={[0.3, 0.1, 0.2]}>
        <boxGeometry args={[0.7, 0.12, 0.7]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, 0.17, 0.2]}>
        <boxGeometry args={[0.65, 0.01, 0.65]} />
        <meshStandardMaterial color="#333333" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* RAM Chip */}
      <mesh position={[0.3, 0.23, 0.2]}>
        <boxGeometry args={[0.6, 0.08, 0.6]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* USB Ports (4 ports) */}
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <mesh key={`usb-${row}-${col}`} position={[1.8, 0.15 + row * 0.15, -0.5 + col * 0.4]}>
            <boxGeometry args={[0.15, 0.12, 0.35]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.7} roughness={0.3} />
          </mesh>
        ))
      )}

      {/* Ethernet Port */}
      <mesh position={[1.8, 0.2, 0.8]}>
        <boxGeometry args={[0.15, 0.18, 0.5]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* HDMI Ports (2 micro HDMI) */}
      {[0, 1].map((i) => (
        <mesh key={`hdmi-${i}`} position={[-1.8, 0.08, -0.3 + i * 0.4]}>
          <boxGeometry args={[0.1, 0.08, 0.25]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Power Port (USB-C) */}
      <mesh position={[-1.8, 0.08, 0.6]}>
        <boxGeometry args={[0.1, 0.06, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Audio Jack */}
      <mesh position={[-1.8, 0.12, 1.1]}>
        <cylinderGeometry args={[0.08, 0.08, 0.15]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* SD Card Slot */}
      <mesh position={[0, -0.06, -1.5]}>
        <boxGeometry args={[0.6, 0.04, 0.15]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Various smaller chips and components */}
      {[
        { pos: [-0.8, 0.06, -0.5], size: [0.3, 0.05, 0.3] },
        { pos: [-0.8, 0.06, 0.5], size: [0.25, 0.04, 0.25] },
        { pos: [0.8, 0.06, -0.8], size: [0.2, 0.04, 0.2] },
        { pos: [0.8, 0.06, 0.8], size: [0.2, 0.04, 0.2] },
      ].map((comp, i) => (
        <mesh key={`comp-${i}`} position={comp.pos as [number, number, number]}>
          <boxGeometry args={comp.size as [number, number, number]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.6} />
        </mesh>
      ))}

      {/* LED indicators */}
      <mesh position={[1.5, 0.06, -1.2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.5, 0.06, -1.0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
