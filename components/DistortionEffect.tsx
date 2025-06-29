import { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const CustomDistortionMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uResolution: new THREE.Vector2(0, 0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution.xy;
      vec2 mouse = uMouse.xy;
      float dist = distance(st, mouse);

      vec2 distortedUv = vUv;
      float strength = smoothstep(0.2, 0.0, dist) * 0.2;
      distortedUv += normalize(mouse - vUv) * strength;
      
      vec4 color = texture2D(uTexture, distortedUv);
      
      float pixelSize = 10.0;
      float d = 1.0 / pixelSize;
      vec2 pixelatedUv = d * floor(vUv / d);
      vec4 pixelatedColor = texture2D(uTexture, pixelatedUv);

      float mixFactor = smoothstep(0.15, 0.0, dist);

      gl_FragColor = mix(color, pixelatedColor, mixFactor);
    }
  `
);

extend({ CustomDistortionMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    customDistortionMaterial: any;
  }
}

const Scene = ({ backgroundImage }: { backgroundImage: string }) => {
  const materialRef = useRef<any>(null);
  const texture = new THREE.TextureLoader().load(backgroundImage);

  useFrame(({ clock, mouse }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
      materialRef.current.uMouse = mouse;
      materialRef.current.uResolution.x = window.innerWidth;
      materialRef.current.uResolution.y = window.innerHeight;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <customDistortionMaterial ref={materialRef} uTexture={texture} />
    </mesh>
  );
};

const DistortionEffect = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas>
        <Scene backgroundImage={backgroundImage} />
      </Canvas>
    </div>
  );
};

export default DistortionEffect;
