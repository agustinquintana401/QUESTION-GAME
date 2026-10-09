function verificarRespuesta(estado, botonClickeado) {
    let parrafoResultado = document.getElementById("resultado-quiz");

    // Quitamos los colores anteriores de todos los botones
    const botones = document.querySelectorAll(".quiz-btn");

    botones.forEach(function(boton) {
        boton.classList.remove("button-active", "button-wrong");
    });

    if (estado === "correcta") {
        parrafoResultado.textContent = "🎉 ¡Correcto!";
        parrafoResultado.style.color = "green";

        botonClickeado.classList.add("button-active");
    } 
    else if (estado === "incorrecta") {
        parrafoResultado.textContent = "❌ ¡Incorrecto!";
        parrafoResultado.style.color = "red";

        botonClickeado.classList.add("button-wrong");
    }
}
