"use client";

import { Canvas } from "@react-three/fiber"
import * as THREE from 'three';
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from 'react';
import { animated } from "@react-spring/three";
import Image from "next/image";
import styled from "styled-components";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={4} castShadow />
      <pointLight intensity={3}/>
    </>
  );
};

const SCREEN_ROTATION_X = 100 * Math.PI / 180;

function Model({ url } : { url: string }) {
  const { scene, nodes } = useGLTF(url, true);
  
  useMemo(() => Object.values(nodes).forEach((obj) => {
      if (obj.name === "Cube001_3" || obj.name === "Screen") {
        obj.rotateX(SCREEN_ROTATION_X);
      }
      (obj as any).isMesh && Object.assign(obj, { castShadow: true, receiveShadow:true  })
  }), [nodes])
  return <primitive object={scene} dispose={null} />;
}

function ModelWrapper() {
  const modelRef = useRef<any>();
  const prevHeight = useRef<number>(0);

  useEffect(() => {
    if (modelRef.current) {
    window.addEventListener("scroll", (e) => {
        let rotationX = modelRef
        .current
        .children[0]
        .children[0]
        .children[0]
        .children[0]
        .children[1].rotation.x; 

        console.log((window.scrollY - prevHeight.current) );
        let addition = (window.scrollY - prevHeight.current) * -0.005; 
        let scaleAddition = (window.scrollY - prevHeight.current) * 0.001; 
        let positionAddition = (window.scrollY - prevHeight.current) * 0.0025;

        if (rotationX + addition < 0 && rotationX + addition > -2.55) {
          const laptop = modelRef
          .current
          .children[0]
          .children[0]
          .children[0]
          .children[0]; 

          laptop.children[1].rotateX(addition);
          laptop.scale.x += scaleAddition;
          laptop.scale.y += scaleAddition;
          laptop.scale.z += scaleAddition;

          laptop.position.z += positionAddition / 2; 
          laptop.position.y -= positionAddition * 2;
        } 
        prevHeight.current = window.scrollY;
      });
    }
  }, []);

  return (
    <animated.mesh
    ref={modelRef}
    rotation={[Math.PI / 6, 0, 0]}
    scale={3}
    position={[0, -2, -2]}
  >
     <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2.75}
            maxPolarAngle={Math.PI / 2.75}
            rotateSpeed={0.5}
            enableRotate={false}
            autoRotate={false}
            enablePan={false}
            autoRotateSpeed={1}
        />
    <Model 
      url={"/laptop.glb"}
    />
    {/* <hemisphereLight intensity={1.5}
      groundColor="gold"/> */}
    <Lights/>
  </animated.mesh>
  )
}

const MouseAnimationContainer = styled.div`
    animation: float 5s ease-in-out infinite;
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(4px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;

export default function Home() {
  return (
    <main style={{ height: 2000,  }}>
      <div className="absolute left-1/2 -translate-x-1/2 top-[150px] flex space-x-3 justify-center items-center">
        <MouseAnimationContainer>
          <Image
            src="/svg/scroll-down.svg"
            width={30}
            height={30}
            alt="Scroll Down"
          />
        </MouseAnimationContainer>
        <p>
          Scroll Down to Begin...
        </p>
      </div>

      {/* look into using demand */}
      <Canvas
        
        frameloop="always" 
        gl={{ 
            antialias: true,
            autoClear: true,
        }}
        onCreated={(ctx) => { 
            ctx.gl.toneMapping = THREE.ACESFilmicToneMapping; 
            ctx.gl.toneMappingExposure = 1;
        }}
        style={{ 
          height: "calc(100vh)",
          width: "100vw", 
          pointerEvents: "none",
          position: "fixed",
          left: 0,
          top: 0
        }}
        dpr={2}
        camera={{}}>
         <ModelWrapper/>
     
        </Canvas>
    </main>
  );

}