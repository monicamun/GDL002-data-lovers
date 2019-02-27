// var declarations
let sliderInterval;

let cardTemplate = `<div class="col-3">
<div class="card " id="{pokemon.number}" >
<img class="pkm-thmb" src="{pokemon.img}" alt="{pokemon.name}">
<div class="name">
 <h3>{pokemon.name}</h3>
</div>
<div class="number">
 <h3>{pokemon.number}</h3>
</div>
<div class="type">
<h3>{pokemon.type}</h3>
</div>
</div>
</div>`;

let pokemonInfoTemplate = `<div class="col-12">
<div class="card " id="{pokemon.number}" >
<img class="pkm-thmb" src="{pokemon.img}" alt="{pokemon.name}">
<div class="name">
 <h3>{pokemon.name}</h3>
</div>
<div class="number">
 <h3>{pokemon.number}</h3>
</div>
<div class="type">
<h3>{pokemon.type}</h3>
</div>
</div>
</div>
`;

document.getElementById("btn1").addEventListener("click", mostrar);
document.getElementById("btn2").addEventListener("click", ocultar);
document
  .getElementById("orderABC")
  .addEventListener("click", alphabeticalOrder);
document.getElementById("orderNum").addEventListener("click", numericalOrder);

let content = document.getElementById("content");

function displayPokemonCards(pokemonArray) {
  let listHtml = pokemonArray.map(pokemon => fillCardTemplate(pokemon));
  let htmlString = listHtml.join(" ");
  content.innerHTML = htmlString;

  Array.from(document.getElementsByClassName("card")).forEach(element => {
    element.addEventListener("click", () => {
      let selectedPokemon = dataLovers.getPokemonByNum(element.id);
      content.innerHTML = pokemonInfoTemplate.replace(
        "{pokemon.img}",
        selectedPokemon.img
      );
    });
  });
}

function fillCardTemplate(pokemon) {
  return cardTemplate
    .replace("{pokemon.img}", pokemon.img)
    .replace("{pokemon.name}", pokemon.name)
    .replace("{pokemon.name}", pokemon.name)
    .replace("{pokemon.number}", pokemon.num)
    .replace("{pokemon.number}", pokemon.num)
    .replace("{pokemon.type}", pokemon.type);
}

function alphabeticalOrder() {
  let sortedPokemon = dataLovers.getAllPokemon().sort(function(prev, next) {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });

  displayPokemonCards(sortedPokemon);
}

function numericalOrder() {
  let numPokemon = dataLovers.getAllPokemon().sort(function(prev, next) {
    if (prev.num > next.num) {
      return 1;
    }
    if (prev.num < next.num) {
      return -1;
    }
    return 0;
  });
  displayPokemonCards(numPokemon);
}

// muestra pokedex, oculta principal
function mostrar() {
  clearInterval(sliderInterval);
  document.getElementById("pokedex").style.display = "block";
  document.getElementById("ocultar").style.display = "none";
}
// oculta pokedex, muestra principal
function ocultar() {
  startSliderInterval()
  document.getElementById("pokedex").style.display = "none";
  document.getElementById("ocultar").style.display = "block";
}

//llenar con lista default de pokemon
displayPokemonCards(dataLovers.getAllPokemon());

let imageIndex = 0;
function banner() {
  
  let images = [
    "imagenes pokemon/banner_4.jpg",
    "imagenes pokemon/banner_2.jpg",
    "imagenes pokemon/banner_6.jpg"
  ];

  document.banner.src = images[imageIndex];

  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
}

function startSliderInterval() {
  // espera 5 segundos
  sliderInterval = setInterval(banner, 5000)
}

// empieza el intervalo al cargar el js
startSliderInterval();
// carga el primer banner sin esperar los 5 segundos
banner();


