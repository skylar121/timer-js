const number = document.createElement('span');
number.setAttribute('class', 'timer-number');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
    start.setAttribute('class', '')
})