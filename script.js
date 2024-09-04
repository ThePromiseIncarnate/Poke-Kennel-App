async function submitPokedex() {
    console.log("Proof of life");
    let pokedexValue = pokeID.value;
    let pokedexFetch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokedexValue}`);
    console.log(pokedexFetch);
    let pokedexData = await pokedexFetch.json();
    console.log(pokedexData);
}

pokemonButton.addEventListener("click", submitPokedex);