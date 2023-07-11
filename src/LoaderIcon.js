import { motion } from "framer-motion/three";
import { degreesToRadians } from "popmotion";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export function LoaderIcon({ isActive, path, size, hue }) {
  const { nodes } = useGLTF(path, true);

  return (
    <Canvas>
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
          color="#fff"
        />
      ))}
      <group>
        {nodes && nodes.links && (
          <motion.mesh
            geometry={nodes.links.geometry}
            material={nodes.links.material}
            rotation={[Math.PI / 2, 0, degreesToRadians(360)]}
            scale={[0.01, 0.01, 0.01]}
            animate={[isActive ? "active" : "unactive"]}
            variants={{
              unactive: {
                x: [0, 0],
                y: [0, 0],
                scale: 0,
                rotateX: 0,
                rotateY: 0
              },
              active: {
                rotateZ: 0,
                rotateX: -0.4,
                rotateY: 0.2,
                scale: 0.0025 * size,
                transition: {
                  rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
                }
              }
            }}
          >
            <mesh />
          </motion.mesh>
        )}
      </group>
    </Canvas>
  );
}

const lights = [
  [2, 1, 4, 1],
  [8, 0, 4, 1],
  [10, 5, 2, 2]
];
