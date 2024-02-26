document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('start-button');
    startButton.style.opacity = '0.2'; // При завантаженні сторінки зробіть кнопку напівпрозорою
    // Встановлюємо готовий код у поле введення
    document.getElementById('code').addEventListener('input', function() {
        var codeInput = document.getElementById('code').value;
        if (/^\d{0,12}$/.test(codeInput)) { // Перевіряємо, чи введено від 0 до 12 цифр від 0 до 9
            startButton.style.opacity = '0.2'; // Зробіть кнопку непрозорою
        } else {
            startButton.style.opacity = '1'; // Зробіть кнопку повністю видимою
            // Обмежуємо введення лише перших 12 цифр
            document.getElementById('code').value = codeInput.slice(0, 12);
        }
    });

    // Змінити колір кнопки на білий
    startButton.style.backgroundColor = 'rgb(255, 255, 255)';
    startButton.style.color = '#000000'; // Текст чорного кольору
});

document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('start-button');
    var codeInput = document.getElementById('code');
    var buttonText = document.getElementById('button-text'); // Додано для звернення до тексту кнопки
    var loadingSpinner = document.getElementById('loading-spinner'); // Додано для звернення до кружечка завантаження

    // Функція для встановлення нового коду
    function setNewCode(newCode) {
        // Очищаємо поле введення
        codeInput.value = '';
        // Встановлюємо новий код у поле введення
        codeInput.value = newCode;
        // Перевіряємо валідність нового коду
        validateCode();
    }

    var correctCode = "711560333277"; // Переміщено з контексту функції для доступу в інших функціях

    var initialCode = "711560333277"; // Припустимо, це ваш початковий код
    setNewCode(initialCode);
    
    startButton.addEventListener('click', function() {
        var code = codeInput.value.trim(); // Отримуємо введений код, видаляючи зайві пробіли
        if (isValidCode(code) && isCorrectCode(code)) {
            window.location.href = 'SI_2part.html'; // Перехід на іншу сторінку лише при валідному і правильному коді
        } else {
            alert("Неправильний код! Будь ласка, введіть коректний код.");
        }
    });
    
    // Функція для перевірки валідності коду
    function isValidCode(code) {
        return /^\d{12}$/.test(code); // Перевіряємо, чи введено рівно 12 цифр
    }

    function isCorrectCode(code) {
        // Порівняємо введений код з правильним кодом
        return code === correctCode;
    }
        
    // Функція для перевірки валідності коду та активації кнопки
    function validateCode() {
        var code = codeInput.value.trim(); // Отримуємо введений код, видаляючи зайві пробіли
        if (code === correctCode) { // Перевіряємо, чи введений код співпадає з правильним кодом
            startButton.removeAttribute('disabled'); // Робимо кнопку активною
        } else {
            startButton.setAttribute('disabled', true); // Робимо кнопку неактивною
        }
    }

    // Додаємо обробник події input для поля введення
    codeInput.addEventListener('input', function() {
        validateCode(); // Перевіряємо валідність коду при зміні вмісту поля введення
    });
    
    // Симулюємо завантаження
    setTimeout(function() {
        // Після завантаження повертаємо текст кнопки та приховуємо кружечок
        buttonText.style.display = "inline-block";
        loadingSpinner.style.display = "none";
    }, 3000); // Затримка в 3 секунди
});


// Отримуємо кнопку за її id
const button2 = document.getElementById('start-button2');

// Додаємо обробник події 'click' на кнопку
button2.addEventListener('click', function() {
    // Переходимо на наступну сторінку
    window.location.href = 'SI_3part.html'; // Замініть 'SI_3part.html' на URL наступної сторінки
});
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-background');
    var content = document.querySelector('.content');

    // Слухаємо подію завершення відтворення відео
    video.addEventListener('ended', function() {
        // Додаємо клас .show-content після завершення відтворення відео
        content.classList.add('show-content');
    });
});
// Створення елементу <style> для вмісту CSS зі шрифтами
var fontStyles = document.createElement('style');
fontStyles.innerHTML = `
    @font-face {
        font-family: 'SlickFont';
        src: url('fonts/slick.295183786cd8a1389865.woff') format('woff'),
             url('fonts/slick.a4e97f5a2a64f0ab1323.eot') format('embedded-opentype'), 
             url('fonts/slick.c94f7671dcc99dce43e2.ttf') format('truetype'); 
    }
`;
function startLoading() {
    var buttonText = document.getElementById("button-text");
    var loadingSpinner = document.getElementById("loading-spinner");

    buttonText.style.display = "none"; // Приховуємо текст кнопки
    loadingSpinner.style.display = "inline-block"; // Показуємо кружечок

    // Симуляція завантаження
    setTimeout(function() {
        // Після завантаження повертаємо текст кнопки та приховуємо кружечок
        buttonText.style.display = "inline-block";
        loadingSpinner.style.display = "none";
    }, 1000); // Затримка в 3 секунди
}

