// связь с элементами на странице
const button = document.querySelector('button'); // задаем переменную и обращение к документу
const counterText = document.querySelector('.counter');
// обращение через дата атрибуты
const buttonReset = document.querySelector('[data-find="reset-btn"]'); 
const buttonTwoPool = document.querySelector('.two-pool')
// данные кода для расчета
let counter = 0;


// увеличиваем счетчик по кнопке
button.addEventListener('click', function(){
    counter = counter + 1;
    // console.log(counter);
    counterText.innerText = counter; // вывод значения в браузере
}); // добавляем обработку действия для копки

buttonTwoPool.addEventListener('click', function(){
    counter = counter + 2;
    // console.log(counter);
    counterText.innerText = counter; // вывод значения в браузере
});

// сбрасываем счетчик по кнопке
buttonReset.addEventListener('click', function(){
    counter = 0;

    counterText.innerText = counter;
});



// DOM - document object model (объектная модель документа)

// console.log(document); // обращение (вывод через консоль) к документу html через жс



