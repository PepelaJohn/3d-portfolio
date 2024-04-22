import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Points,
  Preload,
  PointMaterial,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
const Stars = (props) => {
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  return (
    <group>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div className="w-full -z-10 h-auto absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={1} />
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;
