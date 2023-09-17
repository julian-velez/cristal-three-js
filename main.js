 // Configuración inicial
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ antialias: true });
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Esfera de Cristal
 const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
 const sphereMaterial = new THREE.MeshPhongMaterial({
     color: 0x00ffff,
     transparent: true,
     opacity: 0.8,
     shininess: 100,
     emissive: 0x00ffff,
     emissiveIntensity: 0.5
 });
 const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 scene.add(sphere);

 // Fondo Animado
 const starGeometry = new THREE.BufferGeometry();
 const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });

 const starVertices = [];
 for (let i = 0; i < 10000; i++) {
     const x = (Math.random() - 0.5) * 2000;
     const y = (Math.random() - 0.5) * 2000;
     const z = (Math.random() - 0.5) * 2000;
     starVertices.push(x, y, z);
 }

 starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
 const stars = new THREE.Points(starGeometry, starMaterial);
 scene.add(stars);

 // Configuración de la Cámara
 camera.position.z = 10;

 // Luces
 const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
 scene.add(ambientLight);

 const pointLight = new THREE.PointLight(0xffffff, 1);
 camera.add(pointLight);
 scene.add(camera);

 // Animación
 function animate() {
     requestAnimationFrame(animate);

     // Rotar la esfera
     sphere.rotation.x += 0.002;
     sphere.rotation.y += 0.002;

     // Rotar las estrellas
     stars.rotation.x += 0.0005;
     stars.rotation.y += 0.0005;

     renderer.render(scene, camera);
 }
 animate();