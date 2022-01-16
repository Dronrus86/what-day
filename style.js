let inputs = document.querySelector('.inpyt-date');
let btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
    fetch(`https://isdayoff.ru/${inputs.value}`)
        .then(res => res.json())
        .then(data => {
            if (data == 0) {
                console.log('Рабочий день');
                p.innerText = 'Рабочий день'
            } if (data == 1) {
                console.log('Нерабочий день');
                 p.innerText = 'Нерабочий день'
            } if (data == 2) {
                console.log('Праздничный день');
                 p.innerText = 'Праздничный день'
            }
            console.log(data);

        });


});

