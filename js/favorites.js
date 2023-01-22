/* CREAR CARDS EN FAVORITOS */

/* Traer la informacion de heroes favoritos desde el LocalStore */
let infoDelLs = JSON.parse(localStorage.getItem("favoritos"))

/* Funcion para agregar cards con los heroes favoritos */
function cardAHtml (array) {
    const contenedorFavoritos = document.querySelector(".contenedor-favoritos")
    array.forEach ( (element) => {
        const championImg = (`${element.name}_skin01.jpg`).replace( " ", "" ).toLocaleLowerCase()
        const card = document.createElement ("div")
        card.className = `card ${element.rol.join(" ").toLowerCase()} card__favorite`
        card.innerHTML = `
            <img src="../multimedia/champions/${championImg}" class="card-img-top img--champion" alt="Imagen ${element.name}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="card-title">${element.name}</h3>
                <p class="card-text rol">Rol: ${element.rol.join(", <br>")}</p>
                <button id="button__remove--${element.id}" class="btn btn-primary align-self-center button__remove--allCards">Remove</button>
            </div>
        `
        contenedorFavoritos.appendChild(card)
    });
}

/* Funcion que permite que se ejecute la funcion de agregar cards, solo si el array infoDelLs es distinto a null (esto evita que se produzca un error y se ejecuten el resto de funciones como el modo oscuro) */
if (infoDelLs !== null) {
    cardAHtml(infoDelLs)
}

/* Funcion para remover las cartas (se utiliza para remover todas las cartas) */
function clearFavoritesCards () {
    const cards = document.querySelectorAll(".card__favorite")
    cards.forEach ( ( champion ) => {
        champion.remove()
    } )
}

/* Funcion para remover un heroe de favoritos cuando se hace clic en el boton "remove". Esta funcion al hacer clic en el boton remove devuelve una lista de los heroes favoritos quitando el heroe removido, luego remueve todas las cards y las vuelve a crear usando la lista que se retorno anteriormente. Todo esto actualizando la info del LocalStorage */
function removeFavorite (array) {
    const buttonAllCards = document.querySelectorAll(".button__remove--allCards")
    buttonAllCards.forEach ( (boton) => {
        boton.onclick = () => {
            const id = boton.id.slice(16)
            const filtrarChampions = array.filter ( ( element, index ) => {
                return element.id !== Number(id)
            } )
            infoDelLs = filtrarChampions
            localStorage.setItem ( "favoritos", JSON.stringify ( infoDelLs ) )
            clearFavoritesCards()
            cardAHtml(infoDelLs)
            if ( evaluarModoOscuro() == "on" ) {
                cambiarModoClaroOscuroCards()
            }
            removeFavorite(infoDelLs)
            removerTextoFavoritos()
            Toastify({
                text: "Removed from favorites",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to right, #fca311, #ef233c)",
                },
            }).showToast();
        }
    } )
}
removeFavorite(infoDelLs)


/* Funcion para ocultar / mostrar el texto en favoritos de acuerdo a si existe o no cards en el mismo */
const textoFavoritos = document.querySelector(".favorite__text")
function removerTextoFavoritos () {
    if ( infoDelLs !== null && infoDelLs != "") {
        textoFavoritos.style.display = "none"
    } else {
        textoFavoritos.style.display = "block"
    }
}
removerTextoFavoritos()


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
}

/* Funcion para cambiar los modos Claro/Oscuro de las cards */
function cambiarModoClaroOscuroCards () {
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
    cambiarModoClaroOscuroCards()
    if ( evaluarModoOscuro() == "on" ) {
        localStorage.setItem ( "modoOscuro", "off" )
    } else {
        localStorage.setItem ( "modoOscuro", "on" )
    }
}

/* Funcion que se ocupa de evaluar al cargar la pagina si quedo guardado el modo oscuro, de ser asi lo vuelve a aplicar. */
function modoClaroOscuroInicial () {
    if ( evaluarModoOscuro() == "on" ) {
        cambiarModoClaroOscuro()
        cambiarModoClaroOscuroCards()
    }
}
modoClaroOscuroInicial()

console.log(infoDelLs == "")