let button = document.querySelector('.dice-button');
let number = document.getElementById('Number');
let quote = document.querySelector('.advice-quote');


function formatNumber(number) {
    if (number < 10) {
        return '00' + number;
    }
    if (number > 10 && number < 100) {
        return '0' + number;
    }
    return number;
}

window.addEventListener('load', () => {
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        number.textContent = formatNumber(data.slip.id);
        quote.textContent = data.slip.advice;
    });
})


button.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            number.textContent = formatNumber(data.slip.id);
            quote.textContent = data.slip.advice;
        });
})