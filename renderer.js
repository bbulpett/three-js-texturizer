// Scene is where objects, cameras, lights are added
var scene    = new THREE.Scene(); 
// Perspective camera makes far things small and close things big
var camera   = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// Renderer can render things in WebGL or Canvas 2D
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth/2, window.innerHeight/2);  // Set canvas size
renderer.setClearColor(0x3399ff);                             // Set background color

document.body.appendChild(renderer.domElement);               

// Render the scene 60 times per second
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

