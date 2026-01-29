function enviarWhatsApp(e){
    e.preventDefault(); 

    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    let texto = `Hola, soy ${nombre},%0A`;
    texto += `%0A%0A${mensaje}`;

    let numero = "593982779982";

    let url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, "_blank");
}
