
'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Edges } from '@react-three/drei';

const CUBE_SIZE = 1;
const MIN_DISTANCE = CUBE_SIZE * 2.5;
const NUM_CUBES = 100;
const SCENE_SIZE = 40;
const ROTATION_SPEED = 0.004;
const AMBIENT_LIGHT_INTENSITY = 3;
const CAMERA_POSITION: [number, number, number] = [0, 0, 30];
const FOV = 60;
const GRID_SIZE = Math.floor(SCENE_SIZE / MIN_DISTANCE);

function SpinningBox({ position }: { position: [number, number, number] }) {
  const cubeRef = useRef<any>();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += ROTATION_SPEED;
      cubeRef.current.rotation.y += ROTATION_SPEED;
    }
  });

  return (
    <group ref={cubeRef} position={position}>
      <mesh >
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial
            attach="material"
            color={"black"}
          />
          <Edges color="white" lineWidth={3} />
        </Box>
      </mesh>
    </group>
  );
}

export default function BackgroundCubes() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: document.documentElement.scrollHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };

    // Set initial dimensions
    handleResize();

    // Update dimensions on window resize or orientation change
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const grid = Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(false))
    );

  const generateGridPosition = (): [number, number, number] => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    const z = Math.floor(Math.random() * GRID_SIZE);

    return [x, y, z];
  };

  const isGridPositionValid = (position: [number, number, number]): boolean => {
    return !grid[position[0]][position[1]][position[2]];
  };

  const convertGridPositionToWorldPosition = (
    position: [number, number, number]
  ): [number, number, number] => {
    return [
      (position[0] - GRID_SIZE / 2) * MIN_DISTANCE,
      (position[1] - GRID_SIZE / 2) * MIN_DISTANCE,
      (position[2] - GRID_SIZE / 2) * MIN_DISTANCE,
    ];
  };

  const cubePositions: [number, number, number][] = [];

  while (cubePositions.length < NUM_CUBES) {
    const gridPosition = generateGridPosition();
    if (isGridPositionValid(gridPosition)) {
      grid[gridPosition[0]][gridPosition[1]][gridPosition[2]] = true;
      const worldPosition = convertGridPositionToWorldPosition(gridPosition);
      cubePositions.push(worldPosition);
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: dimensions.width,
        height: dimensions.height,
        zIndex: -2,
      }}
    >
      <Canvas camera={{ position: CAMERA_POSITION, fov: FOV }}>
        <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
        {cubePositions.map((pos, index) => (
          <SpinningBox key={index} position={pos} />
        ))}
      </Canvas>
    </div>
  );
}
