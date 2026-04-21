import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      <mesh ref={meshRef} scale={1.2}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="#3b82f6" wireframe={false} />
      </mesh>

      {/* Rotating orb in background */}
      <mesh position={[0, 0, -5]} scale={0.5}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.8}
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#06b6d4" />
      <ambientLight intensity={0.5} />
    </group>
  );
}

export default function ThreeDTechShowcase() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }} style={{ width: "100%", height: "100%" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75} />
      <RotatingCube />
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  );
}
