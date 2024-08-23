
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Box, Edges } from '@react-three/drei';

const CUBE_SIZE = 1;
// Minimum distance between cubes to avoid collision
const MIN_DISTANCE = CUBE_SIZE * 2.5;
const NUM_CUBES = 100;
// Increased scene size to place cubes further from the center
const SCENE_SIZE = 40;
// Speed of cube rotation
const ROTATION_SPEED = 0.004;
// Intensity of ambient light
const AMBIENT_LIGHT_INTENSITY = 3;
// Position the camera away from the center
const CAMERA_POSITION: [number, number, number] = [0, 0, 30];
// Field of view for the perspective camera
const FOV = 60;
// Calculate grid size based on the scene and minimum distance
const GRID_SIZE = Math.floor(SCENE_SIZE / MIN_DISTANCE);

function SpinningBox({ position }: { position: [number, number, number] }) {
  const cubeRef = useRef<any>();
  const [hovered, onHover] = useState(false);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += ROTATION_SPEED;
      cubeRef.current.rotation.y += ROTATION_SPEED;
    }
  });

  return (
    <group ref={cubeRef} position={position}>
      <mesh
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial
            attach="material"
            color={hovered ? "white" : "black"}
          />
          <Edges color="white" lineWidth={3} />
        </Box>
      </mesh>
    </group>
  );
}

export default function BackgroundCubes() {
  // Declare and initialize the grid
  const grid: boolean[][][] = Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(false))
    );

  // Generate a random grid position in the form of a tuple [x, y, z]
  const generateGridPosition = (): [number, number, number] => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    const z = Math.floor(Math.random() * GRID_SIZE);

    return [x, y, z];
  };

  // Confirm cubes do not overlap
  const isGridPositionValid = (position: [number, number, number]): boolean => {
    return !grid[position[0]][position[1]][position[2]];
  };

  // Convert grid position to world coordinates
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
      grid[gridPosition[0]][gridPosition[1]][gridPosition[2]] = true; // Mark the grid position as occupied
      const worldPosition = convertGridPositionToWorldPosition(gridPosition);
      cubePositions.push(worldPosition);
    }
  }

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
      camera={{ position: CAMERA_POSITION, fov: FOV }}
    >
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      {cubePositions.map((pos, index) => (
        <SpinningBox key={index} position={pos} />
      ))}
    </Canvas>
  );
}
