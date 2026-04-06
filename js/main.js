document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

});


function enviarWhatsApp(e) {
    e.preventDefault();

    let nombre = document.querySelector('[name="nombre"]').value;
    let telefono = document.querySelector('[name="telefono"]').value;
    let servicio = document.querySelector('[name="servicio"]').value;
    let mensaje = document.querySelector('[name="mensaje"]').value;

    let texto = `Hola, soy ${nombre}%0A` +
        `Tel: ${telefono}%0A` +
        `Servicio: ${servicio}%0A` +
        `Mensaje: ${mensaje}`;

    window.open(`https://wa.me/59163379391?text=${texto}`, '_blank');
}
