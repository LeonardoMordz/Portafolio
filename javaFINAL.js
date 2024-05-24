const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');
const optionsContainer = document.getElementById('options');

// Preguntas predefinidas y sus respuestas
const preguntas = [
  {
    pregunta: '¿Qué es la computación cuántica?',
    respuesta: 'La computación cuántica es un campo de la informática que utiliza los principios de la mecánica cuántica para realizar cálculos en ordenadores cuánticos, lo que potencialmente permite resolver problemas complejos de manera más eficiente que los ordenadores clásicos.'
  },
  {
    pregunta: '¿Cuál es el impacto de la computación cuántica?',
    respuesta: 'La computación cuántica tiene el potencial de revolucionar numerosas industrias, incluyendo la criptografía, la simulación de procesos cuánticos, la optimización de algoritmos y la inteligencia artificial, entre otros.'
  },
  
];




// Función para enviar un mensaje
function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    chatDisplay.innerHTML += `<div class="user-message">${message}</div>`;
    processMessage(message);
    userInput.value = '';
  }
}

// Función para procesar el mensaje del usuario
function processMessage(message) {
  const lowerCaseMessage = message.toLowerCase();
  let respuestaEncontrada = false;
  preguntas.forEach((pregunta) => {
    if (lowerCaseMessage.includes(pregunta.pregunta.toLowerCase())) {
      chatDisplay.innerHTML += `<div class="bot-message">${pregunta.respuesta}</div>`;
      respuestaEncontrada = true;
    }
  });
  if (!respuestaEncontrada) {
    showOptions();
  }
}

// Mostrar opciones de preguntas
function showOptions() {
  optionsContainer.innerHTML = '<div>Selecciona una opción:</div>';
  preguntas.forEach((pregunta, index) => {
    optionsContainer.innerHTML += `<div><button onclick="selectOption(${index})">${pregunta.pregunta}</button></div>`;
  });
}

// Función para seleccionar una opción de pregunta
function selectOption(index) {
  const preguntaSeleccionada = preguntas[index];
  chatDisplay.innerHTML += `<div class="user-message">${preguntaSeleccionada.pregunta}</div>`;
  chatDisplay.innerHTML += `<div class="bot-message">${preguntaSeleccionada.respuesta}</div>`;
  optionsContainer.innerHTML = ''; // Limpiar las opciones
}

window.onload = function() {
  userInput.focus();
}

// Obtener el pie de página
const footer = document.getElementById('footer');

// Función para verificar si el usuario ha llegado al final de la página
function mostrarFooter() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.remove('oculto');
  } else {
    footer.classList.add('oculto');
  }
}

window.addEventListener('scroll', mostrarFooter);

window.addEventListener('scroll', mostrarFooter);


//comentarios

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    const deleteCommentsBtn = document.getElementById('deleteComments');

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(function(comment) {
            const li = document.createElement('li');
            li.textContent = `${comment.username}: ${comment.comment}`;
            commentList.appendChild(li);
        });
    }

    function saveComment(username, comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ username, comment });
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = this.elements.username.value;
        const comment = this.elements.comment.value;

        const li = document.createElement('li');
        li.textContent = `${username}: ${comment}`;
        commentList.appendChild(li);

        saveComment(username, comment);
        this.reset();
    });

    deleteCommentsBtn.addEventListener('click', function() {
        commentList.innerHTML = '';
        localStorage.removeItem('comments');
    });

    loadComments();
});
//cuestionario

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const commentTotal = document.getElementById('total');
    const commentComentario = document.getElementById('comentario');
    const pdfFrame = document.getElementById('pdfFrame');

    window.califica = function() {
        let total = 0;
        const radios = quizForm.querySelectorAll('input[type="radio"]:checked');
        radios.forEach(radio => {
            total += parseInt(radio.value);
        });

        commentTotal.innerText = 'Puntuación total: ' + total;

        let comentario;
        if (total === 20) {
            comentario = "¡Excelente! Tienes un conocimiento sólido en computación cuántica.";
        } else if (total >= 10) {
            comentario = "¡Buen trabajo! Pero hay algunas áreas que podrías mejorar.";
        } else {
            comentario = "Parece que necesitas estudiar más sobre computación cuántica.";
        }
        commentComentario.innerText = comentario;
    };

    window.generar = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Resultados del Cuestionario Cuántico", 10, 10);

        const preguntas = quizForm.querySelectorAll('li');
        const radios = quizForm.querySelectorAll('input[type="radio"]:checked');
        
        radios.forEach((radio, index) => {
            doc.text(preguntas[index].innerText + ": " + radio.nextSibling.textContent.trim(), 10, 20 + (index * 10));
        });

        const puntuacion = commentTotal.innerText;
        const comentario = commentComentario.innerText;

        doc.text(puntuacion, 10, 20 + (radios.length * 10));
        doc.text(comentario, 10, 30 + (radios.length * 10));

        pdfFrame.src = doc.output('datauristring');
    };
});
