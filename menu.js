const menuDetails = {
    "Caldo de Gallina": { img: "https://i0.wp.com/recetaskwa.com/wp-content/uploads/2024/12/Caldo-de-gallina-web.jpg?fit=1200%2C626&ssl=1", desc: "Entrada de caldo con gallina, papas, verduras y hierbas aromáticas, ideal como entrada reconfortante." },
    "Sopa de Queso": { img: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/c88832404941a3885c39d6b626819cce.png", desc: "Clásica sopa de queso con trozos suaves de queso fundido y pan crocante." },
    "Menestrón": { img: "https://i0.wp.com/recetaskwa.com/wp-content/uploads/2024/04/Menestron_5.jpg?resize=1024%2C683&ssl=1", desc: "Sopa rica en verduras, fideos y caldo nutritivo." },
    "Sopa de Pollo": { img: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/chicken-soup-dill-resized.jpg", desc: "Sopa tradicional con pollo, verduras y fideos suaves." },
    "Sopa de Alberja": { img: "https://imagenes.elpais.com/resizer/v2/KGBPTKOR4FK5LBIHSK25HJ2T2A.jpg?auth=1c64417a5366be72ac5c1803f357093f4496ad04e0668947812ccbde97670651&width=1960&height=1103&smart=true", desc: "Menestra de arvejas cremosas con especias y pan." },
    "Seco de Pollo": { img: "https://d1uz88p17r663j.cloudfront.net/original/aaa3c21d318c78e3ff7fc8a1c67d3f53_SecoDePollofeb2019.jpg", desc: "Guiso principal de pollo con salsa de tomate, especias y arroz." },
    "Guatita": { img: "https://www.eluniverso.com/resizer/HUKUJB4VjBqqLWny_RR9yQnevi4=/arc-anglerfish-arc2-prod-eluniverso/public/FKDJ3TUYYVHGJNW2XUQSG5LNUQ.jpg", desc: "Estofado tradicional ecuatoriano de mondongo en salsa de maní y papas." },
    "Seco de Costilla": { img: "https://i.ytimg.com/vi/fR5pRODHL_4/maxresdefault.jpg", desc: "Costillas tiernas guisadas con especias, acompañadas de arroz o papas." },
    "Lengua Guisada": { img: "https://www.nashifood.com/wp-content/uploads/2020/11/lengua-guisada-servida-con-arroz.jpg", desc: "Lengua cocida en salsa con especias, acompañada de arroz." },
    "Bistec de Costilla": { img: "https://i.ytimg.com/vi/PAZNJoyUy2o/maxresdefault.jpg", desc: "Bistec jugoso de costilla sazonado y acompañado de guarnición." },
    "Fritada": { img: "https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/e5cb8814a143a1043c9930b8a57ddab3.jpg?itok=YjT5fCIC", desc: "Cerdo frito crocante por fuera, tierno por dentro, servido con maduro o yuca." },
    "Pollo Apanado": { img: "https://www.tipicochileno.cl/wp-content/uploads/2021/05/pollo-apanado-1080-1080.jpg", desc: "Pollo empanizado y dorado, acompañado de ensalada o papas." },
    "Agua Aromática": { img: "https://artesanobuffet.com/wp-content/uploads/2024/03/agua-aromatica-te-artesano-desayuno-buffet-ibarra-1.png", desc: "Bebida refrescante con hierbas naturales y aromas frutales." },
    "Cuaker": { img: "https://www.laylita.com/recetas/wp-content/uploads/2012/03/Colada-o-bebida-de-avena-ecuatoriana-500x375.jpg", desc: "Bebida nutritiva tradicional con café o cacao." },
    "Café": { img: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", desc: "Café caliente preparado al estilo tradicional." },
    "Colas": { img: "https://www.candiesrestaurant.com/wp-content/uploads/2020/10/Gaseosas.png", desc: "Refresco frío en botella o lata." }
};
document.querySelectorAll(".menu-item").forEach(item => {
    item.style.cursor = "pointer";

    const name = item.textContent.replace(/\$\d+\.?\d*/, "").trim();
    if (!menuDetails[name]) return;

    
    const detailDiv = document.createElement("div");
    detailDiv.className = "menu-detail";
    detailDiv.innerHTML = `
        <img src="${menuDetails[name].img}" alt="${name}">
        <p>${menuDetails[name].desc}</p>
    `;
    item.appendChild(detailDiv);
    
    item.addEventListener("click", () => {
        detailDiv.classList.toggle("active");
    });
});