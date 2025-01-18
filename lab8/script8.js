document.querySelectorAll('.btns-menu').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked');
    });
});

document.querySelectorAll('.html-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked1');
    });
});

function topic() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h2>Тема:</h2>
            <p>WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.</p>
            <h2>Мета:</h2>
            <p>Придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій. </p>

            <h2>Посилання:</h2>
            <p><b>Жива сторінка ЛР8:</b> https://blarneyyy.github.io/IC-34_Shnaider_labwork_8/ </p>
            <p><b>Репозиторій ЛР8:</b> https://github.com/blarneyyy/IC-34_Shnaider_labwork_8 </p>
            <p><b>Звіти:</b> https://github.com/blarneyyy/IC-34_Shnaider_reports </p>
            <p><b>Репозиторій звітів:</b> https://github.com/blarneyyy/IC-34_Shnaider_reports </p>
    `;
}

function task1() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h2>Завдання 1</h2>

        <h3>Макет</h3><br>
        <img src="./images/task1_task.jpg" alt="">
        <img src="./images/task1_results.png" alt="">
        <img src="./images/task1_results2.png" alt="">

    `;
}

function task2() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h2>Завдання 2</h2>
        <img src="./images/task2_results1.png" alt=""><br>

        <img src="./images/task2_results2.png" alt="">


    `;
}

function conclusion() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи зі створення модальних вікон, <br>
            повторила процес створення макету, зокрема створення макету галереї довільних зображень. <br>
            Також закріпила навички роботи з делегуванням подій, виконавши два завдання.
        </p>
    `;
}