var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // render the container
    renderer.render(stage);
}