let cardTemplate = `<div class="card">
<img src="{pokemon.img}" alt="{pokemon.name}">
<div class="name">
 <h3>{pokemon.name}</h3>
</div>
<div class="number">
 <h3>{pokemon.number}</h3>
</div>
<div class="type">
<h3>{pokemon.type}</h3>
</div>
</div>`;

let content = document.getElementById("content");

function displayPokemonCards(pokemonArray) {
  let listHtml = pokemonArray.map(pokemon => fillCardTemplate(pokemon));
  let htmlString = listHtml.join(" ");
  content.innerHTML = htmlString;
}

function fillCardTemplate(pokemon) {
  return cardTemplate
    .replace("{pokemon.img}", pokemon.img)
    .replace("{pokemon.name}", pokemon.name)
    .replace("{pokemon.name}", pokemon.name)
    .replace("{pokemon.number}", pokemon.num)
    .replace("{pokemon.type}", pokemon.type);
}

function alphabeticalOrder() {
  let sortedPokemon = dataLovers.getAllPokemon.sort(function(prev, next) {
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

document.getElementById("btn1").addEventListener("click", mostrar);
document.getElementById("btn2").addEventListener("click", ocultar);

function mostrar() {
  document.getElementById("content").style.display = "block";
  document.getElementById("Ocultar").style.display = "none";
}

function ocultar() {
  document.getElementById("content").style.display = "none";
  document.getElementById("Ocultar").style.display = "block";
}

//llenar con lista default de pokemon
displayPokemonCards(dataLovers.getAllPokemon());
