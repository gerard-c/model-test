import * as THREE from '../node_modules/three/build/three.module.js';
// import {GLTFExporter} from '../node_modules/three/examples/jsm/exporters'


const frame = document.getElementById('plane')
frame.addEventListener('load', () => {
  console.log(frame.model.materials[0].normalTexture[0]);
})

const scene = new THREE.Scene();
const geometry = new THREE.PlaneGeometry(1, 1.5);
const texture = new THREE.TextureLoader().load('/assets/planet.jpeg');
const material = new THREE.MeshBasicMaterial({ map: texture })
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
scene.name = 'planet'



console.log(scene)