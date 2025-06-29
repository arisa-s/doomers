"use client";
/* eslint-enable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * PixelDistortionBackground - Interactive WebGL background with pixel distortion effect
 *
 * Based on the Codrops tutorial: https://tympanus.net/codrops/2022/01/12/pixel-distortion-effect-with-three-js/
 *
 * How it works:
 * 1. Shows CSS background image immediately for fast loading
 * 2. Creates a Three.js scene with a fullscreen quad displaying the background image
 * 3. Uses a low-resolution DataTexture (46x46) to store distortion data
 * 4. Tracks mouse/touch movement and velocity
 * 5. Updates DataTexture pixels based on mouse proximity and velocity
 * 6. Fragment shader applies distortion using the DataTexture values
 * 7. Includes chromatic aberration and color shifting effects for enhanced visuals
 * 8. Distortion gradually relaxes back to normal when mouse stops moving
 *
 * Features:
 * - Mouse and touch support for mobile devices
 * - Adjustable distortion strength, radius, and relaxation speed
 * - Enhanced shader with chromatic aberration effect
 * - Proper aspect ratio handling (background-size: cover equivalent)
 * - Performance optimized with low-res DataTexture
 * - CSS fallback to prevent black screens during navigation
 * - Next.js SSR/navigation compatible
 * - React Strict Mode compatible
 */

interface PixelDistortionBackgroundProps {
  imageSrc: string;
  className?: string;
  distortionStrength?: number;
  mouseRadius?: number;
  relaxationSpeed?: number;
}

export default function PixelDistortionBackground({
  imageSrc,
  className = "",
  distortionStrength = 15,
  mouseRadius = 0.15,
  relaxationSpeed = 0.05,
}: PixelDistortionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    console.log("PixelDistortionBackground: useEffect starting for", imageSrc);

    if (!containerRef.current) {
      console.log("PixelDistortionBackground: No container ref");
      return;
    }

    // Prevent double initialization in React Strict Mode
    if (isInitializedRef.current) {
      console.log("PixelDistortionBackground: Already initialized, skipping");
      return;
    }
    isInitializedRef.current = true;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Enable transparency
      antialias: true,
    });

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // DataTexture setup
    const dataWidth = 160;
    const dataHeight = 160;
    const size = dataWidth * dataHeight;
    const data = new Float32Array(4 * size);
    for (let i = 0; i < size; i++) {
      const stride = i * 4;
      data[stride] = 127.5;
      data[stride + 1] = 127.5;
      data[stride + 2] = 0;
      data[stride + 3] = 255;
    }
    const dataTexture = new THREE.DataTexture(
      data,
      dataWidth,
      dataHeight,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;

    // Vertex Shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment Shader
    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDataTexture;
      uniform vec2 uResolution;
      uniform float uImageAspect;
      uniform bool uTextureLoaded;
      uniform float uOpacity;
      varying vec2 vUv;

      void main() {
        if (!uTextureLoaded) {
          // Completely transparent when not loaded
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          return;
        }

        // Fit image width to screen width, scale height proportionally
        float screenAspect = uResolution.x / uResolution.y;
        float scale = uImageAspect / screenAspect;

        vec2 newUV = vUv;
        newUV.y = (vUv.y - 0.5) * scale + 0.5;

        vec2 pixelSize = 1.0 / vec2(160.0, 160.0);
        vec2 quantizedUV = floor(vUv / pixelSize) * pixelSize;
        
        vec4 offset = texture2D(uDataTexture, quantizedUV);
        
        float distortionIntensity = length(offset.rg - 127.5) / 127.5;
        
        vec2 distortedUV = newUV + (offset.rg - 127.5) * 0.001;
        
        float aberrationStrength = distortionIntensity * 0.005;
        vec2 redUV = clamp(distortedUV + vec2(aberrationStrength, 0.0), 0.0, 1.0);
        vec2 greenUV = clamp(distortedUV, 0.0, 1.0);
        vec2 blueUV = clamp(distortedUV - vec2(aberrationStrength, 0.0), 0.0, 1.0);
        
        float r = texture2D(uTexture, redUV).r;
        float g = texture2D(uTexture, greenUV).g;
        float b = texture2D(uTexture, blueUV).b;
        
        vec3 color = vec3(r, g, b);
        if (distortionIntensity > 0.1) {
          color = mix(color, color.gbr, distortionIntensity * 0.4);
        }
        
        gl_FragColor = vec4(color, uOpacity);
      }
    `;

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uDataTexture: { value: dataTexture },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uImageAspect: { value: 1.0 },
        uTextureLoaded: { value: false },
        uOpacity: { value: 0.0 }, // Start transparent
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    // Load the background image
    const imageTexture = new THREE.TextureLoader().load(
      imageSrc,
      (texture) => {
        console.log(
          "PixelDistortionBackground: Texture loaded successfully for",
          imageSrc
        );
        // On successful load
        material.uniforms.uTexture.value = texture;
        material.uniforms.uImageAspect.value =
          texture.image.width / texture.image.height;
        material.uniforms.uTextureLoaded.value = true;
        material.uniforms.uOpacity.value = 1.0;
      },
      undefined, // onProgress
      (error) => {
        // On error, keep CSS background visible
        console.error(
          "PixelDistortionBackground: Error loading texture:",
          error
        );
      }
    );

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // Setup renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Add canvas to container
    container.appendChild(renderer.domElement);
    console.log("PixelDistortionBackground: Canvas added to DOM");

    const mouse = { x: 0.5, y: 0.5, vX: 0, vY: 0 };
    let lastMouseX = 0.5;
    let lastMouseY = 0.5;

    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ("touches" in event) {
        if (event.touches.length === 0) return;
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      mouse.x = clientX / window.innerWidth;
      mouse.y = 1.0 - clientY / window.innerHeight;
      mouse.vX = Math.max(-0.02, Math.min(0.02, mouse.x - lastMouseX));
      mouse.vY = Math.max(-0.02, Math.min(0.02, mouse.y - lastMouseY));
      lastMouseX = mouse.x;
      lastMouseY = mouse.y;
    };

    const updateDataTexture = () => {
      const data = dataTexture.image.data as Float32Array;
      for (let i = 0; i < dataHeight; i++) {
        for (let j = 0; j < dataWidth; j++) {
          const u = j / (dataWidth - 1);
          const v = i / (dataHeight - 1);
          const distance = Math.sqrt(
            Math.pow(mouse.x - u, 2) + Math.pow(mouse.y - v, 2)
          );
          if (distance < mouseRadius) {
            const index = 4 * (i * dataWidth + j);
            const influence = 1.0 - distance / mouseRadius;
            data[index] += mouse.vX * distortionStrength * influence;
            data[index + 1] -= mouse.vY * distortionStrength * influence;
          }
        }
      }
      for (let i = 0; i < data.length; i += 4) {
        data[i] += (127.5 - data[i]) * relaxationSpeed;
        data[i + 1] += (127.5 - data[i + 1]) * relaxationSpeed;
      }
      dataTexture.needsUpdate = true;
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      material.uniforms.uResolution.value.set(newWidth, newHeight);
    };

    const animate = () => {
      updateDataTexture();
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const cleanup = () => {
      console.log("PixelDistortionBackground: Cleaning up for", imageSrc);

      // Stop animation
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      // Remove event listeners
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js resources
      if (material) {
        material.dispose();
      }
      if (mesh && mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (dataTexture) {
        dataTexture.dispose();
      }
      if (imageTexture) {
        imageTexture.dispose();
      }
      if (renderer) {
        renderer.dispose();
      }

      // Remove canvas from DOM
      if (
        renderer.domElement &&
        container &&
        container.contains(renderer.domElement)
      ) {
        container.removeChild(renderer.domElement);
      }

      // Clear references
      rendererRef.current = null;
      sceneRef.current = null;
      isInitializedRef.current = false;
    };

    return cleanup;
  }, [imageSrc, distortionStrength, mouseRadius, relaxationSpeed]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full -z-10 ${className}`}
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
