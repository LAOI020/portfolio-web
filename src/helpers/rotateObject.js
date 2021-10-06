
const constrain = 20;


export const rotateObject = (e, containerRotate) => {
    let xy = [e.clientX, e.clientY];
    
    let position = xy.concat([containerRotate]);

    window.requestAnimationFrame(() => {
        transformElement(containerRotate, position);
    });
}

const transformElement = (el, xyEl) => {
    el.style.transform  = transforms.apply(null, xyEl);
}

const transforms = (x, y, el) => {

    let box = el.getBoundingClientRect();
    
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    
    return "perspective(900px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
};