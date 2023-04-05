const topLineY = 5; // y-координата верхней линии страницы, после которой появляется форма
let previousY = window.innerHeight; // начальное значение для проверки направления движения мыши
let timeoutId;
const modal1 = document.querySelector('#modal-1');

let lastExecutionTime = 0;

document.addEventListener('mousemove', (event) => {
    clearTimeout(timeoutId);
    const mouseY = event.clientY;
    timeoutId = setTimeout(() => {
        if (event.clientY < previousY) {
            const modalOpen = modal1.classList.contains('is-open');
            if (mouseY <= topLineY && !modalOpen) {
                MicroModal.show('modal-1');                 
            }           
        }
        previousY = event.clientY;
    }, 50);
});