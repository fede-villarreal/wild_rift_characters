/* CREACION DE TARJETAS DE HEROE DESDE JS */

/* Funcion para insertar las tarjetas al HTML desde JS */
function cardAHtml (array) {
    const contenedor = document.querySelector(".contenedor")
    array.forEach ( (element) => {
        const championImg = (`${element.name}_skin01.jpg`).replace( " ", "" ).toLocaleLowerCase()
        const card = document.createElement ("div")
        card.className = `card ${element.rol.join(" ").toLowerCase()}`
        card.innerHTML = `
            <img src="multimedia/champions/${championImg}" class="card-img-top img--champion" alt="Imagen ${element.name}">
            <div class="card-body">
                <h3 class="card-title">${element.name}</h3>
                <p class="card-text rol">Rol: ${element.rol.join(", <br>")}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `
        contenedor.appendChild(card)
    });
}
cardAHtml(wildRiftChampions)


/* MODO CLARO / MODO OSCURO */

/* Declaracion de variables desde el DOM */
const botonModosClaroOscuro = document.querySelector("#boton--claro__oscuro")
const body = document.querySelector(".modo--claro")
const header = document.querySelector(".header__modo--claro")
const nav = document.querySelector("nav")
const botonHamburguesa = document.querySelector(".navbar-toggler")
const menuLateralHamburguesa = document.querySelector("#offcanvasDarkNavbar")


/* Funcion para cambiar los modos (es asignado posteriormente a una funcion onclick y a una funcion que evalua info del LocalStore al iniciar o reiniciar la pagina) */
function cambiarModoClaroOscuro () {
    body.classList.toggle ( "modo--oscuro" )
    header.classList.toggle ( "header__modo--oscuro" )
    if ( nav.getAttribute ( "data-bs-theme" ) == "" ) {
        nav.setAttribute ( "data-bs-theme", "dark" )
    } else {
        nav.setAttribute ( "data-bs-theme", "" )
    }
    botonHamburguesa.classList.toggle ( "boton__hamburguesa--oscuro" )
    menuLateralHamburguesa.classList.toggle ( "bg-dark" )
    botonModosClaroOscuro.classList.toggle ("boton__modo--oscuro")
    const card = document.querySelectorAll(".card")
    card.forEach ( ( element ) => {
        element.classList.toggle ( "card__modo--oscuro" )
    } )
}

/* Funcion para evaluar la key "modoOscuro" en el LocalStore */
const evaluarModoOscuro = () => {
    return localStorage.getItem ( "modoOscuro" )
}

/* Funcion evento que cambia los modos claro/oscuro y modifica la info del LocalStore previa una evaluación */
botonModosClaroOscuro.onclick = () => {
    cambiarModoClaroOscuro()
    if ( evaluarModoOscuro() == "on" ) {
        localStorage.setItem ( "modoOscuro", "off" )
    } else {
        localStorage.setItem ( "modoOscuro", "on" )
    }
}

/* Funcion que se ocupa de evaluar al cargar la pagina si quedo guardado el modo oscuro, de ser asi lo vuelve a aplicar */
function modoClaroOscuroInicial () {
    if ( evaluarModoOscuro() == "on" ) {
        cambiarModoClaroOscuro()
    }
}
modoClaroOscuroInicial()



/* FILTRADO POR ROL DE HEROES */

/* Funcion para ocultar todas las tarjetas antiguas (se utiliza dentro de la funcion filtrar por rol) */
const ocultarCards = () => {
    let allCards = document.querySelectorAll(".card")
    allCards.forEach ( ( card ) => {
        card.style.display = "none"
    } )
}

/* Funcion que muestra las cards de los Champios de acuerdo a su rol */
const filtrarPorRol = ( posicion ) => {
    const cardsFiltradas = document.querySelectorAll ( posicion )
    cardsFiltradas.forEach ( ( card ) => {
        card.style.display = "flex"
    } )
}

/* Declaracion de variables DOM con los botones de Rol de los Champions */
const allLane = document.querySelector("#all-lane")
const soloLane = document.querySelector("#solo-lane")
const midLane = document.querySelector("#mid-lane")
const dragonLane = document.querySelector("#dragon-lane")
const support = document.querySelector("#support")
const jungle = document.querySelector("#jungle")

/* Funcion onclick para filtar por rol (primero oculta todas las tarjetas y luego muestra las tarjetas de los Champios del rol seleccionado) */
const eventoFiltrarPorRol = ( variable, posicion) => {
    variable.onclick = () => {
        ocultarCards ()
        filtrarPorRol ( posicion )
    }
}
eventoFiltrarPorRol ( allLane, ".card" )
eventoFiltrarPorRol ( soloLane, ".solo-lane" )
eventoFiltrarPorRol ( midLane, ".mid-lane" )
eventoFiltrarPorRol ( dragonLane, ".dragon-lane" )
eventoFiltrarPorRol ( support, ".support" )
eventoFiltrarPorRol ( jungle, ".jungle" )
