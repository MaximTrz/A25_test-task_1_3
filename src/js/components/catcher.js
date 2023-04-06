const topLineY = 5; // y-координата верхней линии страницы, после которой появляется форма
let previousY = window.innerHeight; // начальное значение для проверки направления движения мыши
const maxShowCatcher = 2; // максимальное количество показов

let showCount = 0;
let timeoutId;
const modal1 = document.querySelector('#modal-1');

let lastExecutionTime = 0;

document.addEventListener('mousemove', (event) => {
    clearTimeout(timeoutId);
    const mouseY = event.clientY;
    timeoutId = setTimeout(() => {
        if (event.clientY < previousY) {
            const modalOpen = modal1.classList.contains('is-open');
            if (mouseY <= topLineY && !modalOpen && showCount<maxShowCatcher) {
                MicroModal.show('modal-1');
                showCount++;                 
            }           
        }
        previousY = event.clientY;
    }, 50);
});