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

let listHtml = dataLovers.getAllPokemon().map(pokemon => {
  return cardTemplate
    .replace("{pokemon.img}", pokemon.img)
    .replace("{pokemon.name}", pokemon.name)
    .replace("{pokemon.name}",pokemon.name)
    .replace("{pokemon.number}",pokemon.num)
    .replace("{pokemon.type}",pokemon.type);
});




let htmlString = listHtml.join(' ');

let content = document.getElementById('content');

content.innerHTML = htmlString;


