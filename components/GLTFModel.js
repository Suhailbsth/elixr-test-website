import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function CameraScene() {
  const cameraRef = useRef();
  const mouse = useRef([0, 0]);

  useFrame(() => {
    cameraRef.current.lookAt(mouse.current[0], mouse.current[1], 0);
  });

  return (
    <Canvas>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} />

      {/* Load your camera model */}
      <GLTFLoader url="path/to/your/model.gltf">
        {(gltf) => (
          <primitive object={gltf.scene} />
        )}
      </GLTFLoader>

      <Html>
        <div
          onMouseMove={(e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) * 2 - 1;
            const y = -(clientY / window.innerHeight) * 2 + 1;
            mouse.current = [x, y];
          }}
        >
          {/* Content or GUI elements can go here */}
        </div>
      </Html>
    </Canvas>
  );
}

export default CameraScene;
