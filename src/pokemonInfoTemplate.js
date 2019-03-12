let pokemonInfoTemplate = (pokemon) => {
    return `
    <div>
      <div id="${pokemon.number}">
      <div class="row">
      <div class= "col-5">
        <img class="pkm" src="${pokemon.img}" alt="${pokemon.name}">
        </div>
        <div class="col-7">
        <div class="number">
          <h3>Número:  ${pokemon.number}</h3>
        </div>
        <div class="type">
          <h3>Es un pokemón de tipo: ${pokemon.type}</h3>
        </div>
        <div class="weaknesses">
          <h3> Su debilidad son los pokemon de tipo: ${pokemon.debilidad}</h3>
        </div>
        </div>
        </div>
        <div class="next_evolution">
          <h3 class="evolutions" >Evoluciones<h4>
          {pokemon.next.img}
          <h4>{pokemon.next_evolutions}</h4>
        </div>
        <div class="prev_evolution">
          <h3 class="preevolutions">Preevoluciones<h4>
          {pokemon.prev.img}
          <h4>{pokemon.prev_evolutions}</h4>
        </div>
      </div>
    </div>`;
  }