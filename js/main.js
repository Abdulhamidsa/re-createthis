window.addEventListener("DOMContentLoaded", init);

function init() {
    loadData();
}
async function loadData() {
    const response = await fetch(
        "https://designslayer.dk/portfolio/wp-json/wp/v2/bike?_embed"
    );
    console.log("response2", response);
    const bikeData = await response.json();
    displaybike(bikeData);
}
async function displaybike(userJSON) {
    userJSON.forEach((bikes) => {
        const template = document.querySelector("#bikeProductTemplate").content;
        const copy = template.cloneNode(true);
        copy.querySelector(".brand").textContent = bikes.brand;
        copy.querySelector(".name").textContent = bikes.title.rendered;
        copy.querySelector(".item-price").textContent = bikes.price + " $ ";
        copy.querySelector(".availability").textContent = bikes.availability;
        copy.querySelector(".color1").style.backgroundColor = bikes.color;
        copy.querySelector(".color2").style.backgroundColor = bikes.color2;
        copy.querySelector(".color3").style.backgroundColor = bikes.color3;
        copy.querySelector(".color4").style.backgroundColor = bikes.color4;
        copy.querySelector(".color5").style.backgroundColor = bikes.color5;
        console.log(bikes._embedded["wp:term"][0][0].name);
        /*         copy.querySelector("bike-image").setAttribute();
         */
        copy.querySelector(".bike-image").src = bikes.image.guid;
        const parent = document.querySelector("article");
        parent.appendChild(copy);
    });
}