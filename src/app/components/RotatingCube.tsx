
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useRef } from 'react';

function SpinningBox() {
  const cubeRef = useRef<any>();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={cubeRef} args={[2, 2, 2]}>
      <meshStandardMaterial attach="material" color="white" />
    </Box>
  );
}

export default function RotatingCube() {
  return (
    <Canvas>
      <ambientLight intensity={3} />
      <SpinningBox /> {/* This is where useFrame is used, inside the Canvas */}
    </Canvas>
  );
}
