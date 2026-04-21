import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const OPEN_SOURCE_MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb";

function OpenSourceModel() {
  const modelRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF(OPEN_SOURCE_MODEL_URL);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = elapsed * 0.45;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = elapsed * 0.22;
    }
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <primitive ref={modelRef} object={scene.clone()} scale={2.2} position={[0, -0.35, 0]} />
      </Float>

      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]} scale={2}>
        <torusGeometry args={[1.3, 0.06, 16, 120]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}

function ShowcaseFallback() {
  return (
    <mesh scale={1.2}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
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
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} color="#93c5fd" />
      <pointLight position={[-3, 1, 3]} intensity={0.6} color="#22d3ee" />
      <Suspense fallback={<ShowcaseFallback />}>
        <OpenSourceModel />
      </Suspense>
      <Environment preset="city" />
      <OrbitControls
        autoRotate
        autoRotateSpeed={isTouchDevice ? 1.2 : 1.8}
        enableZoom={false}
        enablePan={false}
        enableRotate={!isTouchDevice}
      />
    </Canvas>
  );
}

useGLTF.preload(OPEN_SOURCE_MODEL_URL);
