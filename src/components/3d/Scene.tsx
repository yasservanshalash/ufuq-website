import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { KhaleejiGuide } from './KhaleejiGuide';

interface SceneProps {
  currentStage: number;
  isVisible: boolean;
}

export function Scene({ currentStage, isVisible }: SceneProps) {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 1.5, 4]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Suspense fallback={null}>
        <KhaleejiGuide currentStage={currentStage} isVisible={isVisible} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}