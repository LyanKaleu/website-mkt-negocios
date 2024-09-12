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
    course.addEventListener('click', function() {
        // Remove a classe "selected" de todos os cursos
        courses.forEach(c => c.classList.remove('selected'));
        
        // Adiciona a classe "selected" apenas ao curso clicado
        this.classList.add('selected');

        // Atualiza o título e o ícone da página
        titleElement.textContent = courseData[index].title;
        faviconElement.href = courseData[index].icon;
        
        // Alterna o conteúdo das abas com base no curso selecionado
        if (index === 0) { // Curso 1 selecionado
            showCourseContent('course1');
        } else if (index === 1) { // Curso 2 selecionado
            showCourseContent('course2');
        }
    });
});

// Variável para armazenar a aba ativa
let activeTab = 'Ementa';

// Função para mostrar o conteúdo do curso selecionado
function showCourseContent(courseId) {
    // Esconde todo o conteúdo dos cursos
    document.querySelectorAll('.tabcontent').forEach(tab => {
        tab.style.display = 'none';
    });

    // Esconde os botões de abas do curso não selecionado
    document.querySelectorAll('.tab, .tab2').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remove a classe "active" de todas as abas
    document.querySelectorAll('.tablink').forEach(tablink => {
        tablink.classList.remove('active');
    });

    // Mostra o conteúdo do curso correspondente
    if(courseId === 'course1') {
        document.querySelectorAll('#Ementa, #ObjetivoGeral, #Metodologia, #Recursos').forEach(tab => {
            document.querySelector('.tab').style.display = 'flex';
            document.getElementById(activeTab).style.display = 'block';
            document.querySelector(`[onclick="openTab(event, '${activeTab}')"]`).classList.add('active');
        });
        
    } else if(courseId === 'course2') {
        document.querySelectorAll('#Ementa2, #ObjetivoGeral2, #Metodologia2, #Recursos2').forEach(tab => {
            document.querySelector('.tab2').style.display = 'flex';
            document.getElementById(activeTab + '2').style.display = 'block';
            document.querySelector(`[onclick="openTab(event, '${activeTab}2')"]`).classList.add('active');
        });
    }
};

// Função para abrir abas individuais
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todo o conteúdo das tabs
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Remove a classe "active" de todos os links
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Mostra a tab ativa e adiciona a classe "active" ao link clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Armazena a aba ativa
    activeTab = tabName;
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

function countdown () {
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

window.onload = atualizarValoresIngressos;

// Seleciona automaticamente o primeiro curso quando a página carrega
document.addEventListener("DOMContentLoaded", function(){
    if (courses.length > 0) {
        // Adiciona a classe 'selected' ao primeiro curso
        courses[0].classList.add('selected');
        courses[0].click();
        
        // Atualiza o título e o ícone da página
        titleElement.textContent = courseData[0].title;
        faviconElement.href = courseData[0].icon;
    }

    countdown();
}); 