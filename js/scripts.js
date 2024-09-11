// Seleciona todos os containers de curso
const courses = document.querySelectorAll(".course");

// Seleciona os elementos do título e do ícone
const titleElement = document.querySelector("title");
const faviconElement = document.querySelector("link[rel='icon']");

// Define os novos títulos e ícones para cada curso (ajuste os caminhos dos ícones)
const courseData = [
    {
        title: "Curso de Marketing & Vendas",
        icon: "assets/course01.ico"
    },
    {
        title: "Curso de Gestão de Negócios & Empreendedorismo",
        icon: "assets/course02.ico"
    }
];
// Adiciona um evento de clique para cada curso
courses.forEach((course, index) => {
    course.addEventListener("click", function() {
        // Remove a classe "selected" de todos os cursos
        courses.forEach(c => c.classList.remove("selected"));
        
        // Adiciona a classe "selected" apenas ao curso clicado
        this.classList.add("selected");
      
        // Determina o número do curso com base na classe do curso
        const courseNumber = this.classList.contains('course1') ? 1 : 2;

        // Alterna para o curso correspondente
        switchCourse(index + 1); // Usando o índice + 1 para determinar o curso
    });
});

// Função para alterar o curso ativo
function switchCourse(courseId) {
    // Mostra o conteúdo do curso selecionado
    document.getElementById('course' + courseId + '-content').style.display = 'block';

    // Seleciona automaticamente a primeira aba dentro do curso atual
    const firstTab = document.querySelector(`#tab${courseId} .tablink`);
    if (firstTab) {
        firstTab.click(); // Simula o clique na primeira aba do curso
    }
}

// Função para abrir abas
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

window.onload = atualizarValoresIngressos;

document.addEventListener("DOMContentLoaded", function(){
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
});

// Evento ao carregar a página
window.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona automaticamente o primeiro curso e abre sua primeira tab
    switchCourse(1); // Abre o curso 1 por padrão
});