
const box = document.querySelector('.box');
let direction = 'right';
let x = 0;
let y = 0;
const speed = 5;

function animate() {

    switch (direction) {
        case 'right':
            x += speed;
            box.style.left = `${x}px`;
            if (x >= window.innerWidth - box.offsetWidth) {
                direction = 'down';
            }
            break;
        case 'down':
            y += speed;
            box.style.top = `${y}px`;
            if (y >= window.innerHeight - box.offsetHeight) {
                direction = 'left';
            }
            break;
        case 'left':
            x -= speed;
            box.style.left = `${x}px`;
            if (x <= 0) {
                direction = 'up';
            }
            break;
        case 'up':
            y -= speed;
            box.style.top = `${y}px`;
            if (y <= 0) {
                direction = 'right';
            }
            break;
    }

    requestAnimationFrame(animate);
}

animate();