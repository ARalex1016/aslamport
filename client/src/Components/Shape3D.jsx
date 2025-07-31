import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export const Bubble3D = () => {
  return (
    <Canvas>
      <color attach="background" args={["#000"]} />
      <Suspense fallback="...loading">
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#00BCFB"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={2} />
          <directionalLight color="red" position={[1, 2, 0]} />
        </mesh>
      </Suspense>
    </Canvas>
  );
};
