/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Model.gltf 
*/

import React, { useRef, useState } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ThreeDCam(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("gltf/Model.gltf");
  const { actions } = useAnimations(animations, group);
  const scale = 20;
  const initialCameraPosition = [10, 1, 5]; // Initial camera position

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Define camera parameters
  const cameraRef = useRef();
  const cameraSensitivity = 5; // Adjust this value for camera sensitivity

  // Update the mouse position when the mouse moves
  document.addEventListener("mousemove", (e) => onmousemove(e));

  function onmousemove(event) {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }
  // Use the useFrame hook to update the camera's position and rotation based on mouse movement
  //   useFrame(() => {
  //     // Adjust camera position based on mouse position
  //     const { x, y } = mousePosition;
  //     const dx = (x / window.innerWidth - 0.5) * 2;
  //     const dy = (y / window.innerHeight - 0.5) * 2;

  //     const newCameraPosition = [
  //       initialCameraPosition[0] + dx * cameraSensitivity,
  //       initialCameraPosition[1] + dy * cameraSensitivity,
  //       initialCameraPosition[2],
  //     ];

  //     cameraRef.current.position.set(...newCameraPosition);

  //     // Look at the center of the model
  //     cameraRef.current.lookAt(0, 0, 0);
  //   });

  useFrame((_, delta) => {
    const { x, y } = mousePosition;
    const dx = (x / window.innerWidth - 0.5) * 2;
    const dy = (y / window.innerHeight - 0.5) * 2;
    console.log(dx, dy);
    const divider = dx / 10;
    const newCameraPosition = [
      initialCameraPosition[0],
      initialCameraPosition[1] + (dy + dy * 1.5) * cameraSensitivity,
      initialCameraPosition[2] + (dx + dx * 1.5) * cameraSensitivity,
    ];

    cameraRef.current.position.set(...newCameraPosition);

    // Look at the center of the model
    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <group>
      <ambientLight intensity={1} /> {/* Ambient light */}
      <directionalLight position={[1, 10, 10]} intensity={30} />
      {/* <spotLight position={[0, 10, 10]} /> */}
      
      <group
        ref={group}
        scale={[scale, scale, scale]}
        {...props}
        dispose={null}
      >
        <group name="Scene">
          <group name="Empty" position={[-0.012, -0.441, 0]}>
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Metal}
              position={[0.133, 1.309, 0.742]}
            />
            <mesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials["Black body"]}
              position={[0.133, 1.309, 0.742]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.Metal}
              position={[-0.349, -0.347, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.151}
            />
            <mesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={materials.Metal}
              position={[0.003, -0.62, 0]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={[0.305, 0.035, 0.305]}
            />
            <mesh
              name="Cylinder002"
              geometry={nodes.Cylinder002.geometry}
              material={materials["Black body"]}
              position={[1.603, 1.547, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.434, 0.173, 0.434]}
            />
            <mesh
              name="Cylinder003"
              geometry={nodes.Cylinder003.geometry}
              material={materials["Black body"]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={0.186}
            />
            <mesh
              name="Cylinder004"
              geometry={nodes.Cylinder004.geometry}
              material={materials.Metal}
              position={[1.681, 0.588, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.434, 2.171, 0.434]}
            />
            <mesh
              name="Cylinder005"
              geometry={nodes.Cylinder005.geometry}
              material={materials.Metal}
              position={[1.799, 1.547, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.46, 0.027, 0.46]}
            />
            <group
              name="Cylinder006"
              position={[1.912, 1.788, 0.064]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.128, 0.051, 0.128]}
            >
              <mesh
                name="Cylinder013_1"
                geometry={nodes.Cylinder013_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder013_2"
                geometry={nodes.Cylinder013_2.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              name="Cylinder007"
              position={[1.963, 1.442, 0.193]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.161, 0.064, 0.161]}
            >
              <mesh
                name="Cylinder014_1"
                geometry={nodes.Cylinder014_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder014_2"
                geometry={nodes.Cylinder014_2.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              name="Cylinder008"
              position={[1.938, 1.507, -0.238]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.141, 0.056, 0.141]}
            >
              <mesh
                name="Cylinder015_1"
                geometry={nodes.Cylinder015_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder015_2"
                geometry={nodes.Cylinder015_2.geometry}
                material={materials.Metal}
              />
            </group>
            <mesh
              name="Cylinder009"
              geometry={nodes.Cylinder009.geometry}
              material={materials.Metal}
              position={[0.003, -0.098, 0]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={[0.275, 0.031, 0.275]}
            />
            <group
              name="Cylinder010"
              position={[1.701, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.161, 0.064, 0.161]}
            >
              <mesh
                name="Cylinder019_1"
                geometry={nodes.Cylinder019_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder019_2"
                geometry={nodes.Cylinder019_2.geometry}
                material={materials.Metal}
              />
            </group>
            <mesh
              name="Cylinder011"
              geometry={nodes.Cylinder011.geometry}
              material={materials.Metal}
              position={[0.012, 0.239, 0.33]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.151}
            />
            <mesh
              name="Cylinder012"
              geometry={nodes.Cylinder012.geometry}
              material={materials.Metal}
              position={[0.73, 1.315, 0.951]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.126}
            />
            <mesh
              name="Cylinder013"
              geometry={nodes.Cylinder013.geometry}
              material={materials["Black body"]}
              position={[1.49, 1.307, 0.736]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={0.069}
            />
            <mesh
              name="Cylinder014"
              geometry={nodes.Cylinder014.geometry}
              material={materials.Metal}
              position={[1.536, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.128, 0.015, 0.128]}
            />
            <mesh
              name="Cylinder015"
              geometry={nodes.Cylinder015.geometry}
              material={materials.Metal}
              position={[1.321, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.128, 0.015, 0.128]}
            />
            <mesh
              name="Cylinder016"
              geometry={nodes.Cylinder016.geometry}
              material={materials["Black body"]}
              position={[-1.781, 1.307, 0.736]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={0.069}
            />
            <mesh
              name="Cylinder017"
              geometry={nodes.Cylinder017.geometry}
              material={materials.Metal}
              position={[-1.708, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.08, 0.009, 0.08]}
            />
            <group
              name="Cylinder018"
              position={[2.187, 1.507, -0.242]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.205, 0.115, 0.205]}
            >
              <mesh
                name="Cylinder030_1"
                geometry={nodes.Cylinder030_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder030_2"
                geometry={nodes.Cylinder030_2.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              name="Cylinder019"
              position={[2.132, 0.588, 0.38]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.045, 0.018, 0.045]}
            >
              <mesh
                name="Cylinder031_1"
                geometry={nodes.Cylinder031_1.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder031_2"
                geometry={nodes.Cylinder031_2.geometry}
                material={materials.Metal}
              />
            </group>
            <mesh
              name="Cylinder020"
              geometry={nodes.Cylinder020.geometry}
              material={materials["Black body"]}
              position={[2.13, 0.815, -0.237]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={0.069}
            />
            <mesh
              name="Cylinder021"
              geometry={nodes.Cylinder021.geometry}
              material={materials.Metal}
              position={[2.128, 0.619, -0.236]}
              rotation={[0, 1.571, 0]}
              scale={[0.128, 0.026, 0.128]}
            />
            <mesh
              name="Cylinder022"
              geometry={nodes.Cylinder022.geometry}
              material={materials.Metal}
              position={[2.128, 0.934, -0.236]}
              rotation={[0, 1.571, 0]}
              scale={[0.079, 0.011, 0.079]}
            />
            <mesh
              name="Cylinder023"
              geometry={nodes.Cylinder023.geometry}
              material={materials.Glass}
              position={[1.823, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.169, 0.067, 0.169]}
            />
            <mesh
              name="Cylinder024"
              geometry={nodes.Cylinder024.geometry}
              material={materials.Glass}
              position={[2.097, 1.442, 0.193]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.169, 0.067, 0.169]}
            />
            <mesh
              name="Cylinder025"
              geometry={nodes.Cylinder025.geometry}
              material={materials.Glass}
              position={[2.011, 1.783, 0.065]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.135, 0.054, 0.135]}
            />
            <mesh
              name="Cylinder026"
              geometry={nodes.Cylinder026.geometry}
              material={materials.Glass}
              position={[2.247, 1.506, -0.238]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.225, 0.09, 0.225]}
            />
            <mesh
              name="Cylinder027"
              geometry={nodes.Cylinder027.geometry}
              material={materials.Glass}
              position={[-2.001, 1.309, 0.742]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.168, 0.067, 0.168]}
            />
            <mesh
              name="Cylinder028"
              geometry={nodes.Cylinder028.geometry}
              material={materials.Metal}
              position={[-2.007, 1.307, 0.736]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={0.069}
            />
            <mesh
              name="Cylinder029"
              geometry={nodes.Cylinder029.geometry}
              material={materials.Metal}
              position={[1.359, 1.309, 0.742]}
              rotation={[Math.PI, 0, Math.PI / 2]}
              scale={[0.101, 0.211, 0.101]}
            />
            <mesh
              name="Cylinder030"
              geometry={nodes.Cylinder030.geometry}
              material={materials.Metal}
              position={[-0.103, 0.283, 0.097]}
              rotation={[-Math.PI / 2, -0.548, Math.PI / 2]}
              scale={[0.434, 2.171, 0.434]}
            />
            <group
              name="Cylinder031"
              position={[-1.603, -0.632, 0.099]}
              rotation={[Math.PI / 2, 0.543, -Math.PI / 2]}
              scale={[0.045, 0.018, 0.045]}
            >
              <mesh
                name="Cylinder099"
                geometry={nodes.Cylinder099.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder099_1"
                geometry={nodes.Cylinder099_1.geometry}
                material={materials.Metal}
              />
            </group>
            <mesh
              name="Film_box"
              geometry={nodes.Film_box.geometry}
              material={materials["Black body"]}
              position={[0.845, 2.977, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
            <mesh
              name="Film_box001"
              geometry={nodes.Film_box001.geometry}
              material={materials["Black body"]}
              position={[0.845, 2.977, 0.11]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.614, 0.194, 0.614]}
            />
            <mesh
              name="Film_box002"
              geometry={nodes.Film_box002.geometry}
              material={materials.Metal}
              position={[0.013, 0.504, 0.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.487, 0.154, 0.487]}
            />
            <mesh
              name="Film_box004"
              geometry={nodes.Film_box004.geometry}
              material={materials["Black body"]}
              position={[0.186, 2.336, 0.205]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.064, 0.02, 0.064]}
            />
            <mesh
              name="Film_box005"
              geometry={nodes.Film_box005.geometry}
              material={materials["Black body"]}
              position={[-0.623, 1.303, 0.471]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.614, 0.194, 0.614]}
            />
            <mesh
              name="Film_box006"
              geometry={nodes.Film_box006.geometry}
              material={materials["Black body"]}
              position={[0.495, 0.687, 0.583]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.064, 0.02, 0.064]}
            />
            <mesh
              name="Film_box007"
              geometry={nodes.Film_box007.geometry}
              material={materials["Black body"]}
              position={[0.755, 0.795, 0.568]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.14, 0.045, 0.14]}
            />
            <mesh
              name="Film_box008"
              geometry={nodes.Film_box008.geometry}
              material={materials["Black body"]}
              position={[0.845, 2.977, 0.24]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.257, 0.082, 0.257]}
            />
            <mesh
              name="Film_box009"
              geometry={nodes.Film_box009.geometry}
              material={materials["Black body"]}
              position={[0.024, 1.274, 0.871]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.064, 0.02, 0.064]}
            />
            <mesh
              name="Film_box010"
              geometry={nodes.Film_box010.geometry}
              material={materials["Black body"]}
              position={[0.73, 1.315, 0.959]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.096, 0.03, 0.096]}
            />
            <mesh
              name="Film_box011"
              geometry={nodes.Film_box011.geometry}
              material={materials.Metal}
              position={[0.845, 2.977, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
            <mesh
              name="Film_box012"
              geometry={nodes.Film_box012.geometry}
              material={materials.Metal}
              position={[0.845, 2.977, -0.515]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
            <mesh
              name="Film_box013"
              geometry={nodes.Film_box013.geometry}
              material={materials["Black body"]}
              position={[0.013, 0.504, 0.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.487, 0.154, 0.487]}
            />
            <mesh
              name="Film_box014"
              geometry={nodes.Film_box014.geometry}
              material={materials.Metal}
              position={[0.013, 0.504, -0.431]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.487, 0.154, 0.487]}
            />
            <group
              name="Film_box015"
              position={[-0.745, 2.977, 0.399]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.14, 0.045, 0.14]}
            >
              <mesh
                name="Cylinder048"
                geometry={nodes.Cylinder048.geometry}
                material={materials["Black body"]}
              />
              <mesh
                name="Cylinder048_1"
                geometry={nodes.Cylinder048_1.geometry}
                material={materials.Metal}
              />
            </group>
            <mesh
              name="Icosphere001"
              geometry={nodes.Icosphere001.geometry}
              material={materials.Metal}
              position={[-1.363, 2.008, 0.575]}
              scale={0.055}
            />
            <mesh
              name="Icosphere002"
              geometry={nodes.Icosphere002.geometry}
              material={materials.Metal}
              position={[-1.363, 0.596, 0.575]}
              scale={0.055}
            />
            <mesh
              name="Icosphere003"
              geometry={nodes.Icosphere003.geometry}
              material={materials.Metal}
              position={[1.384, 2.008, 0.575]}
              scale={0.055}
            />
            <mesh
              name="Icosphere004"
              geometry={nodes.Icosphere004.geometry}
              material={materials.Metal}
              position={[1.384, 0.596, 0.575]}
              scale={0.055}
            />
            <mesh
              name="Icosphere005"
              geometry={nodes.Icosphere005.geometry}
              material={materials.Metal}
              position={[0.845, 2.977, 0.311]}
              scale={0.066}
            />
            <mesh
              name="Icosphere006"
              geometry={nodes.Icosphere006.geometry}
              material={materials.Metal}
              position={[1.52, 2.008, 0.438]}
              rotation={[0, 1.571, 0]}
              scale={0.055}
            />
            <mesh
              name="Icosphere007"
              geometry={nodes.Icosphere007.geometry}
              material={materials.Metal}
              position={[1.52, 2.008, -0.46]}
              rotation={[0, 1.571, 0]}
              scale={0.055}
            />
            <mesh
              name="Icosphere008"
              geometry={nodes.Icosphere008.geometry}
              material={materials.Metal}
              position={[1.52, 0.969, 0.438]}
              rotation={[0, 1.571, 0]}
              scale={0.055}
            />
            <mesh
              name="Icosphere009"
              geometry={nodes.Icosphere009.geometry}
              material={materials.Metal}
              position={[1.52, 0.969, -0.46]}
              rotation={[0, 1.571, 0]}
              scale={0.055}
            />
            <mesh
              name="Icosphere010"
              geometry={nodes.Icosphere010.geometry}
              material={materials.Metal}
              position={[-0.376, 1.317, 0.856]}
              scale={0.055}
            />
            <mesh
              name="Icosphere011"
              geometry={nodes.Icosphere011.geometry}
              material={materials.Metal}
              position={[0.258, 1.317, 0.856]}
              scale={0.055}
            />
            <mesh
              name="Main_box"
              geometry={nodes.Main_box.geometry}
              material={materials["Black body"]}
              position={[0.012, 0.441, 0]}
            />
            <mesh
              name="Main_box_frame"
              geometry={nodes.Main_box_frame.geometry}
              material={materials.Metal}
              position={[0.012, 0.441, 0]}
            />
            <mesh
              name="Main_box001"
              geometry={nodes.Main_box001.geometry}
              material={materials["Black body"]}
              position={[0.012, 0.987, 0]}
            />
            <mesh
              name="Main_box002"
              geometry={nodes.Main_box002.geometry}
              material={materials["Black body"]}
              position={[2.181, 1.507, -0.242]}
              scale={[0.253, 0.253, 0.376]}
            />
            <mesh
              name="Main_box003"
              geometry={nodes.Main_box003.geometry}
              material={materials.Metal}
              position={[3.094, 1.504, -0.248]}
              scale={[0.253, 0.253, 0.376]}
            />
            <mesh
              name="Reel_role"
              geometry={nodes.Reel_role.geometry}
              material={materials["Black body"]}
              position={[-0.745, 2.977, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
            <mesh
              name="Reel_role001"
              geometry={nodes.Reel_role001.geometry}
              material={materials.Metal}
              position={[-0.745, 2.977, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
            <mesh
              name="Reel_role002"
              geometry={nodes.Reel_role002.geometry}
              material={materials.Metal}
              position={[-0.745, 2.977, -0.509]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.802, 0.254, 0.802]}
            />
          </group>
          <PerspectiveCamera
            name="Camera"
            ref={cameraRef}
            makeDefault={true}
            far={25}
            near={1}
            fov={35}
            position={initialCameraPosition}
            rotation={[0, 0, 0]} // You can adjust the camera's rotation if needed
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("gltf/Model.gltf");