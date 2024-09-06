// Seleciona todos os containers de curso
const courses = document.querySelectorAll(".course");

// Adiciona um evento de clique para cada curso
courses.forEach(course => {
    course.addEventListener("click", function() {
        // Remove a classe "selected" de todos os cursos
        courses.forEach(c => c.classList.remove("selected"));
        
        // Adiciona a classe "selected" apenas ao curso clicado
        this.classList.add("selected");
    });
});

// Seleciona automaticamente o primeiro curso quando a página carrega
window.addEventListener('DOMContentLoaded', (event) => {
    if (courses.length > 0) {
        // Adiciona a classe 'selected' ao primeiro curso
        courses[0].classList.add('selected');
    }
});