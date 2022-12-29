/* Funcion para insertar las tarjetas al HTML desde JS */

function cardAHtml (array) {
    const contenedor = document.querySelector(".contenedor")
    array.forEach ( (element) => {
        const card = document.createElement ("div")
        card.className = "card"
        card.innerHTML = `
            <img src=${element.img} class="card-img-top" alt="Imagen ${element.name}">
            <div class="card-body">
                <h3 class="card-title">${element.name}</h3>
                <p class="card-text">Rol: ${element.rol.join(",<br>")}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `
        contenedor.appendChild(card)
    });
}
cardAHtml(wildRiftChampions)


/* Funcion que retorna una lista filtrada de Champios de acuerdo a su rol */

const filtrarPorRol = ( array, posicion ) => {
    return array.filter ( ( champion ) => {
        for (let i = 0; i < champion.rol.length; i++) {
            if (posicion == "All Lane") {
                return champion.rol
            } else if (champion.rol[i] == posicion) {
                return champion.rol
            }
        }
    } )
}


/* Funcion para remover las tarjetas antiguas (se utiliza dentro de la funcion filtrar por rol) */

const removeCards = () => {
    let allCards = document.querySelectorAll(".card")
    allCards.forEach ( ( card ) => {
        card.remove()
    } )
}


/* Declaracion de variables DOM de acuerdo al Rol de los Champions */

const allLane = document.querySelector("#all-lane")
const soloLane = document.querySelector("#solo-lane")
const midLane = document.querySelector("#mid-lane")
const dragonLane = document.querySelector("#dragon-lane")
const support = document.querySelector("#support")
const jungle = document.querySelector("#jungle")


/* Funcion onclick para filtar por rol (primero remueve las tarjetas anterior y luego inserta los Champios de acuerdo a su rol) */

const eventoFiltrarPorRol = ( variable, rolString ) => {
    variable.onclick = () => {
        removeCards ()
        cardAHtml ( filtrarPorRol ( wildRiftChampions, rolString ) )
    }
}
eventoFiltrarPorRol ( allLane, "All Lane" )
eventoFiltrarPorRol ( soloLane, "Solo Lane" )
eventoFiltrarPorRol ( midLane, "Mid Lane" )
eventoFiltrarPorRol ( dragonLane, "Dragon Lane" )
eventoFiltrarPorRol ( support, "Support" )
eventoFiltrarPorRol ( jungle, "Jungle" )


/* Modo Claro / Modo Oscuro */

const botonModosClaroOscuro = document.querySelector("#boton--claro__oscuro")
const body = document.querySelector(".modo--claro")
const nav = document.querySelector("nav")

/* Funcion para cambiar los modos (es asignado posteriormente a una funcion onclick y a una funcion que evalua info del LocalStore al iniciar o reiniciar la pagina) */
function cambiarModoClaroOscuro () {
    body.classList.toggle ( "modo--oscuro" )
    botonModosClaroOscuro.classList.toggle ("boton__modo--oscuro")
    if ( nav.getAttribute ( "data-bs-theme" ) == "" ) {
        nav.setAttribute ( "data-bs-theme", "dark" )
    } else {
        nav.setAttribute ( "data-bs-theme", "" )
    }
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

