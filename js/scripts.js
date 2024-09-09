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

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todo o conteúdo das tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a tab ativa e adiciona a classe "active" ao link clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function atualizarValoresIngressos() {
    const dataAtual = new Date();
    
    const lote1Fim = new Date('2024-09-30');
    const lote2Inicio = new Date('2024-10-01');
    const lote2Fim = new Date('2024-10-15');
    const lote3Inicio = new Date('2024-10-16');
    
    const estudanteBox = document.querySelector('.card.studant p');
    const demaisBox = document.querySelector('.card.entire p');

    
    if (dataAtual <= lote1Fim) {
        estudanteBox.textContent = 'R$ 200,00';
        demaisBox.textContent = 'R$ 350,00';
    } else if (dataAtual >= lote2Inicio && dataAtual <= lote2Fim) {
        estudanteBox.textContent = 'R$ 250,00';
        demaisBox.textContent = 'R$ 400,00';
    } else if (dataAtual >= lote3Inicio) {
        estudanteBox.textContent = 'R$ 300,00';
        demaisBox.textContent = 'R$ 450,00';
    }
};

function countdown(){
    var SEC = 1000;
    var MIN = 60 * SEC;
    var HR = 60 * MIN;
    var DAY = 24 * HR;
    var interval;

    var dayElement = document.querySelector("#rd-counter-lzsxjnwr .counter-days .value");
    var hourElement = document.querySelector("#rd-counter-lzsxjnwr .counter-hours .value");
    var minuteElement = document.querySelector("#rd-counter-lzsxjnwr .counter-minutes .value");
    var secondElement = document.querySelector("#rd-counter-lzsxjnwr .counter-seconds .value");

    initCountdown()

    function initCountdown() {
    var countdownDate = "Sat Oct 26 2024 08:00:00 GMT-0300 (Hora padrão de Brasília)"
    
    interval = setInterval(() => updateCounter(new Date(countdownDate)), 1000);
    }

    function updateCounter(dateTarget) {
    var countdown = calculateTimeDifference(dateTarget);

    dayElement.innerHTML = countdown.days;
    hourElement.innerHTML = countdown.hours;
    minuteElement.innerHTML = countdown.minutes;
    secondElement.innerHTML = countdown.seconds;
    };

    function calculateTimeDifference(dateTarget) {
    var currentTime = new Date().getTime();
    var difference = dateTarget.getTime() - currentTime;

    if (difference < 0) {
        clearInterval(interval)
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    var days = `${Math.floor(difference / DAY)}`.padStart(2, '0');
    var hours = `${Math.floor((difference % DAY) / HR)}`.padStart(2, '0');
    var minutes = `${Math.floor((difference % HR) / MIN)}`.padStart(2, '0');
    var seconds = `${Math.floor((difference % MIN) / SEC)}`.padStart(2, '0');

    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
    };
};

// Seleciona automaticamente o primeiro curso quando a página carrega
window.addEventListener('DOMContentLoaded', (event) => {
    if (courses.length > 0) {
        // Adiciona a classe 'selected' ao primeiro curso
        courses[0].classList.add('selected');
    }

    // Abre a primeira tab (EMENTA) por padrão e adiciona a classe "active" ao primeiro link
    document.getElementById("defaultOpen").click();
    atualizarValoresIngressos();
    countdown();
});