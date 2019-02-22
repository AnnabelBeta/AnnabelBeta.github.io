const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )


var redd = 0.5
var darkening = true
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )
camera.position.z = 5

geometry = new THREE.BoxGeometry( 3, 3, 3)
material = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {
 requestAnimationFrame( animate )
 
 if(darkening == true){
	 redd = redd-0.01
	 if(redd <= 0.01){
		 darkening = false
	 }
 }
 else{
	 redd = redd+0.01
	 if(redd >= 0.99){
		 darkening = true
	 }
 }
 cube.material.color.r = redd
 cube.material.color.g = 1-redd
 cube.material.color.b = 1-redd
 cube.material.color
 cube.rotation.x += 0.007;
 cube.rotation.y += 0.03;
 
 wireframeCube.rotation.x -= 0.001;
 wireframeCube.rotation.y -= 0.001;
 
 renderer.render( scene, camera )
}
animate()