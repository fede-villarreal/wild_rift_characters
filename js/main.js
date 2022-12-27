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

const filtrarPorRol = ( array, posicion ) => {
    return array.filter ( ( champion ) => {
        for (let i = 0; i < champion.rol.length; i++) {
            if (champion.rol[i] == posicion){
                return champion.rol
            }
        }
    } )
}

console.log(filtrarPorRol(wildRiftChampions, "Solo Lane"))
console.log(filtrarPorRol(wildRiftChampions, "Mid Lane"))
console.log(filtrarPorRol(wildRiftChampions, "Dragon Lane"))
console.log(filtrarPorRol(wildRiftChampions, "Support"))
console.log(filtrarPorRol(wildRiftChampions, "Jungle"))

const removeCards = () => {
    let allCards = document.querySelectorAll(".card")
    allCards.forEach ( ( card ) => {
        card.remove()
    } )
}

const allLane = document.querySelector("#all-lane")
allLane.onclick = () => {
    removeCards()
    cardAHtml(wildRiftChampions)
}

const soloLane = document.querySelector("#solo-lane")
soloLane.onclick = () => {
    removeCards()
    cardAHtml( filtrarPorRol ( wildRiftChampions, "Solo Lane" ) )
}

const midLane = document.querySelector("#mid-lane")
midLane.onclick = () => {
    removeCards()
    cardAHtml( filtrarPorRol ( wildRiftChampions, "Mid Lane" ) )
}

const dragonLane = document.querySelector("#dragon-lane")
dragonLane.onclick = () => {
    removeCards()
    cardAHtml( filtrarPorRol ( wildRiftChampions, "Dragon Lane" ) )
}

const support = document.querySelector("#support")
support.onclick = () => {
    removeCards()
    cardAHtml( filtrarPorRol ( wildRiftChampions, "Support" ) )
}

const jungle = document.querySelector("#jungle")
jungle.onclick = () => {
    removeCards()
    cardAHtml( filtrarPorRol ( wildRiftChampions, "Jungle" ) )
}
