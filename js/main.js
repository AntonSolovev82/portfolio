// Получаем все кнопки навигации
const navButtons = document.querySelectorAll('.nav-button');

// Функция для переключения секций
function switchSection(targetId) {
    // Скрываем все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Показываем целевую секцию
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');
}

// Добавляем обработчик событий для каждой кнопки
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        switchSection(targetId);
    });
});