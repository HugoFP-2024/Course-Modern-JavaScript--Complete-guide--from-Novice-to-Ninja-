// Digital Clock Example
// This script updates the clock element every second with the current time.

const clock = document.querySelector('.clock');

const tick = () => {
    // Pads single-digit numbers with a leading zero.
    const singleDigit = digit => {
        return digit < 10 ? `0${digit}` : digit;
    };

    const now = new Date();

    // const hours = now.getHours();
    // const minutes = now.getMinutes();
    // let seconds = new Date().getSeconds(); // You don't need the 'const' now if you wish.
 
    const html = `
        <span>${singleDigit(now.getHours())}</span>
        <span>${singleDigit(now.getMinutes())}</span>
        <span>${singleDigit(now.getSeconds())}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);