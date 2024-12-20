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
            <p>ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ. 
               Реалізація програм засовами мови JAVASCRIPT.</p>
            <h2>Мета:</h2>
            <p>Придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. 
            Реалізація програм засовами мови JAVASCRIPT. </p>

            <h2>Посилання:</h2>
            <p><b>Жива сторінка ЛР5:</b> https://blarneyyy.github.io/IC-34_Shnaider_labwork_6/ </p>
            <p><b>Репозиторій ЛР5:</b> https://github.com/blarneyyy/IC-34_Shnaider_labwork_6 </p>
            <p><b>Звіти:</b> https://github.com/blarneyyy/IC-34_Shnaider_reports </p>
            <p><b>Репозиторій звітів:</b> https://github.com/blarneyyy/IC-34_Shnaider_reports </p>
    `;
}

function task2() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 2</h3><br>
        <img src="../images/task2_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task2_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task2_results.png" alt="">
    `;
}

function task4() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 4</h3><br>
        <img src="../images/task4_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task4_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task4_results.png" alt="">
    `;
}

function task6() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 6</h3><br>
        <img src="../images/task6_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task6_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task6_results.png" alt="">
    `;
}

function task8() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="../images/task8_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task8_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task8_results.png" alt="">
    `;
}

function task9() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="../images/task9_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task9_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task9_results.png" alt="">
    `;
}

function task10() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 10</h3><br>
        <img src="../images/task10_task.png" alt="">
        <h3>Програмний код</h3><br>
        <img src="../images/task10_prog.png" alt="">
        <h3>Результати виконання</h3><br>
        <img src="../images/task10_results.png" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з об'єктами та методами об'єктів JS, <br>
            познайомилась з Callback-функціями, стрілочними функціями та стрілочними функціями як колбеками. <br>
            Зокрема, реалізувала 6 завдань для відпрацювання навичок.
        </p>
    `;
}