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
/* cardAHtml(wildRiftChampions) */

const soloLane = document.querySelector("#solo-lane")
const soloLaneFilter = wildRiftChampions.filter ( ( champion ) => {
    return champion.rol == "Solo Lane"
} )
cardAHtml(soloLaneFilter)
console.log(soloLaneFilter)
/* Requiere filtrar dentro de un array */
