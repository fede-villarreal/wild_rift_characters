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
    for (let i = 0; i < champion.rol.length; i++) {
        if (champion.rol[i] == "Solo Lane"){
            return champion.rol
        }
    }
} )
cardAHtml(soloLaneFilter)
console.log(soloLaneFilter)
