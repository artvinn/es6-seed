import { Container } from 'pixi.js';

window.onload = function() {
    const cont = new Container();
    setTimeout(() => {
        console.log(cont);
    }, 4000);  

    console.log(2);
}

