import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SaasScene() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(elapsed * 0.35) * 0.18;
      groupRef.current.position.y = Math.sin(elapsed * 0.8) * 0.08;
    }
    if (glowRef.current) {
      glowRef.current.scale.x = 1.9 + Math.sin(elapsed * 0.8) * 0.08;
      glowRef.current.scale.y = 1.05 + Math.sin(elapsed * 0.8) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* back glow to make logo feel premium and branded */}
      <mesh position={[0, 0.08, -0.35]} scale={[2.2, 1.2, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#1d4ed8" transparent opacity={0.16} />
      </mesh>

      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.3}>
        <Center position={[0, 0.05, 0]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            size={0.55}
            height={0.16}
            curveSegments={10}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.012}
            bevelSegments={4}
          >
            Sitexar
            <meshStandardMaterial
              color="#70b7ff"
              emissive="#1d4ed8"
              emissiveIntensity={0.32}
              metalness={0.62}
              roughness={0.18}
            />
          </Text3D>
        </Center>
      </Float>

      {/* soft logo underglow */}
      <mesh ref={glowRef} position={[0, -0.55, -0.25]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.9, 1.05, 1]}>
        <circleGeometry args={[1, 40]} />
        <meshStandardMaterial color="#1d4ed8" emissive="#1d4ed8" emissiveIntensity={0.26} transparent opacity={0.34} />
      </mesh>

      {/* vertical light pillars for cinematic environment */}
      <mesh position={[-1.35, -0.05, -0.45]} scale={[0.07, 1.45, 0.07]}>
        <cylinderGeometry args={[1, 1, 1, 12]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.38} transparent opacity={0.55} />
      </mesh>
      <mesh position={[1.35, -0.05, -0.45]} scale={[0.07, 1.45, 0.07]}>
        <cylinderGeometry args={[1, 1, 1, 12]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.38} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

export default function ThreeDTechShowcase() {
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4], fov: 70 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#111827"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75} />
      <ambientLight intensity={0.62} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} color="#bfdbfe" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[0, -1, 2]} intensity={0.45} color="#2563eb" />
      <SaasScene />
      <Sparkles count={50} size={2.2} scale={[4, 2.3, 2]} speed={0.2} color="#93c5fd" />
      <ContactShadows position={[0, -0.7, 0]} opacity={0.35} blur={1.8} scale={4} far={1.5} />
      <Environment preset="city" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={isTouchDevice ? 0.9 : 1.2}
        enableZoom={false}
        enablePan={false}
        enableRotate={!isTouchDevice}
      />
    </Canvas>
  );
}
