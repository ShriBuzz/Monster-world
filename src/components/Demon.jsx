/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Demon({ hovered, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/Demon.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const playAnimation = hovered ? 'Wave' : 'Idle';
    actions[playAnimation].reset().fadeIn(0.5).play();
    return () => actions[playAnimation].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='CharacterArmature'>
          <primitive object={nodes.Root} />
          <group name='Demon'>
            <skinnedMesh
              name='Cube098'
              geometry={nodes.Cube098.geometry}
              material={materials.Demon_Main}
              skeleton={nodes.Cube098.skeleton}
            />
            <skinnedMesh
              name='Cube098_1'
              geometry={nodes.Cube098_1.geometry}
              material={materials.Black}
              skeleton={nodes.Cube098_1.skeleton}
            />
            <skinnedMesh
              name='Cube098_2'
              geometry={nodes.Cube098_2.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube098_2.skeleton}
            />
            <skinnedMesh
              name='Cube098_3'
              geometry={nodes.Cube098_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube098_3.skeleton}
            />
          </group>
          <skinnedMesh
            name='Trident'
            geometry={nodes.Trident.geometry}
            material={materials.Black}
            skeleton={nodes.Trident.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Demon.gltf');
