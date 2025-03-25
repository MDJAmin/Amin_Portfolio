import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const points = random.inSphere(new Float32Array(3 * 1666), { radius: 1.2 });

    if (points.some(isNaN)) {
      console.error("NaN detected in star positions!", points);
    }

    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.geometry.computeBoundingSphere();
    }
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere || new Float32Array()}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className='w-full h-auto fixed inset-0 z-0'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
