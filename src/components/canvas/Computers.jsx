import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { HemisphereLight } from "three";

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <HemisphereLight intensity={0.15}
      groundColor="black" />
      <pintLight intensity={1} />
      <Primitive 
      object={computer.scene}
      />
    </mesh>
  );
};

 const ComputersCanvas = () =>{
  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{position: [20,3,5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >

    <Suspense fallback={<CanvasLoader />}>

    <OrbitControls enableZoom={false} />

    </Suspense>
    </Canvas>
  )
 }

export default Computers;