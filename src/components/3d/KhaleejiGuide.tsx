import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function KhaleejiGuide({ currentStage = 0, isVisible = false }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/khaleejiguide.glb');
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  useEffect(() => {
    // Play idle animation by default
    actions.idle.play();

    // When stage changes, play jump animation
    if (isVisible) {
      actions.jump.reset().play();
      // After jump, return to idle
      setTimeout(() => {
        actions.jump.crossFadeTo(actions.idle, 0.5);
      }, 1000);
    }
  }, [actions, currentStage, isVisible]);

  useFrame(() => {
    if (group.current) {
      // Make character face camera
      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);
      direction.y = 0;
      group.current.lookAt(direction);
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.Scene} />
    </group>
  );
}

useGLTF.preload('/models/khaleejiguide.glb');