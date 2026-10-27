const boton = document.getElementById("menu-toggle");
const menu = document.getElementById("navigation");

if (boton && menu) {
    boton.addEventListener("click", function () {
        const abierto = menu.classList.toggle("is-open");

        boton.textContent = abierto ? "✕" : "☰";
        boton.setAttribute("aria-expanded", abierto);
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    menu.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menu.classList.remove("is-open");
            boton.textContent = "☰";
            boton.setAttribute("aria-expanded", "false");
            boton.setAttribute("aria-label", "Abrir menú");
        });
    });
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const formulario = document.getElementById("contact-form");
const mensaje = document.getElementById("form-message");

if (formulario && mensaje) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mensaje.textContent =
            "Formulario validado. Todavía no está conectado a un servicio de envío.";
    });
}