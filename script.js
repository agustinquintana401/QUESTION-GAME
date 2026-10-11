let idiomaActual = "en";
function verificarRespuesta(estado, botonClickeado) {
    let parrafoResultado = document.getElementById("resultado-quiz");

    // Quitamos los colores anteriores de todos los botones
    const botones = document.querySelectorAll(".quiz-btn");

    botones.forEach(function(boton) {
        boton.classList.remove("button-active", "button-wrong");
    });

    if (estado === "correcta") {
        parrafoResultado.textContent = idiomaActual  ==="es"?"🎉¡correcto!":"🎉 Correct!";
        parrafoResultado.style.color = "green";

        botonClickeado.classList.add("button-active");
    } 
    else if (estado === "incorrecta") {
        parrafoResultado.textContent = idiomaActual ==="es"?"❌¡incorrecto!":"❌ wrong!";
        parrafoResultado.style.color = "red";

        botonClickeado.classList.add("button-wrong");
    }
}


function cambiarIdioma() {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let boton = document.getElementById("btn-idioma");
    let cantidadVidas = document.getElementById("cantidad-vidas");
    let numeroPreguntas = document.getElementById("numero-preguntas");
    let pregunta = document.getElementById("pregunta");
    let respuestas = document.querySelectorAll(".respuesta");

    if (idiomaActual === "en") {
        idiomaActual = "es";
        title.textContent = "JUEGO DE PREGUNTAS"
        subtitle.textContent = "Preguntas y Respuestas"
        boton.textContent = "🇺🇸 Cambiar a inglés";
        cantidadVidas.textContent = "❤️corazones:3";
        numeroPreguntas.textContent = "🤔 preguntas 1/10"
        pregunta.textContent = "¿Cuántos meses hay en un año?";

        respuestas[0].textContent = "10 meses";
        respuestas[1].textContent = "12 meses";
        respuestas[2].textContent = "11 meses";

    } else {
        idiomaActual = "en";
        title.textContent = "QUESTION GAME"
        subtitle.textContent = "Questions and Answers"
        boton.textContent = "🇦🇷 Switch to Spanish";
        cantidadVidas.textContent  = "❤️ hearts:3"
        numeroPreguntas.textContent = "🤔questions 1/10"
        pregunta.textContent = "How many months are in a year?";

        respuestas[0].textContent = "10 months";
        respuestas[1].textContent = "12 months";
        respuestas[2].textContent = "11 months";
    }
}
