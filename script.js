async function submitPokedex() {
    console.log("Proof of life");
    let pokedexValue = pokeID.value;
    let pokedexFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexValue}`);
    console.log(pokedexFetch);
    let pokedexData = await pokedexFetch.json();
    console.log(pokedexData);
    let pokedexColorFetch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokedexValue}`)
    console.log(pokedexColorFetch);
    let pokedexColorData = await pokedexColorFetch.json();

    let pokemonName = pokedexData.species.name;
    let pokemonImg = pokedexData.sprites.front_default;
    let pokemonHP = pokedexData.stats[0].base_stat;
    let pokemonAttack = pokedexData.stats[1].base_stat;
    let pokemonDefense = pokedexData.stats[2].base_stat;
    let pokemonSpAttack = pokedexData.stats[3].base_stat;
    let pokemonSpDefense = pokedexData.stats[4].base_stat;
    let pokemonSpeed = pokedexData.stats[5].base_stat;
    let pokemonColor = pokedexColorData.color.name;
    console.log(pokemonImg);
    console.log(pokemonName);
    console.log(pokemonHP);
    console.log(pokemonColor);
    pokeEntry.innerHTML = `
    <div class="card" style="background-color: ${pokemonColor}">
      <img class="card-img-top" src="${pokemonImg}">
      <div class="card-body"> 
        <h3 class="card-title">${pokemonName}</h3>
        <p class="card-text">
            HP: ${pokemonHP} <br>
            Attack: ${pokemonAttack} <br>
            Defense: ${pokemonDefense} <br>
            Special Attack: ${pokemonSpAttack} <br>
            Special Defense: ${pokemonSpDefense} <br>
            Speed: ${pokemonSpeed}
        </p>
      </div>
    </div>`;
};

pokemonButton.addEventListener("click", submitPokedex);