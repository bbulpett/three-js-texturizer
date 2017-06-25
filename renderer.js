// SCENE is where objects, cameras, lights are added
var scene    = new THREE.Scene(); 
// PERSPECTIVE camera makes far things small and close things big
var camera   = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// RENDERER can render things in WebGL or Canvas 2D
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth/2, window.innerHeight/2);  // Set canvas size
renderer.setClearColor(0x3399ff);                             // Set background color

document.body.appendChild(renderer.domElement);               

// MESH (geometry + material) using Three.js primitive "box" geometry
var geometry = new THREE.BoxGeometry(5, 5, 5); // (width, height, depth)
var material = new THREE.MeshLambertMaterial({color: 0xf6546a}) 
var mesh = new THREE.Mesh(geometry, material)

scene.add(mesh);

// LIGHTING
var light = new THREE.PointLight(0xffffff, 1.2); //(color, intensity)
light.position.set(0, 0, 6); // position (x, y, z)

scene.add(light);

// Camera position
camera.position.z = 10;


// Render the scene
function render() {
  setTimeout( function() {
    requestAnimationFrame(render);
  }, 1000 / 25 ); // Slow down animation (Default rate of 60 times/second was too fast)
  mesh.rotation.x += 0.1;
  mesh.rotation.y += 0.1;
  renderer.render(scene, camera);
}

render();

