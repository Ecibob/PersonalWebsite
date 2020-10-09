var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000); // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Resize scene to window size
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height; // Aspect ratio calculation
    camera.updateProjectionMatrix();
});

// Implement OrbitControls.js 
controls = new THREE.OrbitControls ( camera, renderer.domElement);

camera.position.z = 7;

// Skybox geometry creation
var geometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
var cubeMaterials =
[
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/front.png' ), side: THREE.DoubleSide } ), // Right side
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/back.png' ), side: THREE.DoubleSide } ), // Left side
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/up.png' ), side: THREE.DoubleSide } ), // Top side
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/down.png' ), side: THREE.DoubleSide } ), // Bottom side
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/right.png' ), side: THREE.DoubleSide } ), // Front side
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Skybox/left.png' ), side: THREE.DoubleSide } ) // Back side
];

var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, cubeMaterial );
scene.add( cube );

var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5 );
scene.add( ambientLight );

// Game logic
var update = function () {

};

// Draw objects and scene
var render = function () {
    renderer.render(scene, camera);
};

// Construct that runs game loop (update, render, repeat)
var GameLoop = function () {
    requestAnimationFrame(GameLoop);

    update();
    render();
};

GameLoop();