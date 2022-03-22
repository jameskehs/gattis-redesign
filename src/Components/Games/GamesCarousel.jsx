import { useRef, useEffect } from "react";
import * as THREE from "three";

function GameCarousel() {
  const mount = useRef(null);
  useEffect(() => {
    const gameImg = [
      "amazing-alley.png",
      "high-five.png",
      "hyper-shoot.png",
      "lets-bounce.png",
      "whack-n-win.png",
      "amazing-alley.png",
      "whack-n-win.png",
      "lets-bounce.png",
      "hyper-shoot.png",
      "high-five.png",
      "whack-n-win.png",
      "lets-bounce.png",
    ];
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });
    camera.position.setZ(1.5);
    camera.position.setY(-0.5);
    renderer.setClearColor(0xffffff, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 750);
    renderer.render(scene, camera);
    const group = new THREE.Group();

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 0);
    pointLight.color.set("white");
    scene.add(pointLight);

    scene.add(group);
    group.rotation.x = 89.5;

    let angle = 0;
    const interval = Math.PI / 6;
    const length = 4;
    let rotation = Math.PI / 2;
    let gameIndex = 0;
    console.log(gameIndex);

    while (angle < 2 * Math.PI) {
      const loader = new THREE.TextureLoader();
      loader.crossOrigin = "";
      const planeTexture = loader.load(`./Images/Games/${gameImg[gameIndex]}`);
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshStandardMaterial({
          map: planeTexture,
          transparent: true,
        })
      );

      plane.position.x = length * Math.cos(angle);
      plane.position.y = length * Math.sin(angle);
      plane.rotation.x = Math.PI / 2;
      plane.rotation.z = Math.PI;
      plane.rotation.y = rotation + Math.PI;
      group.add(plane);
      rotation += Math.PI / 6;
      angle += interval;
      ++gameIndex;
    }
    function animate() {
      requestAnimationFrame(animate);

      group.rotation.z -= 0.002;

      renderer.render(scene, camera);
    }

    animate();
  }, []);
  return <canvas id="bg" ref={mount}></canvas>;
}

export default GameCarousel;
