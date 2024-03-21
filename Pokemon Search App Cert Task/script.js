// API URL 
const pokemonAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonHp = document.getElementById("hp");
const pokemonTypes = document.getElementById("types");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense")
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonSpeed = document.getElementById("speed");

const card = document.getElementById("card");

const cardImage = document.getElementById("card-image")

const fetchData = async (name) => {
    try {
        const res = await fetch(pokemonAPI.concat(name));
        const data = await res.json();
        showSearchPokemon(data);
        console.log(data)
    } catch (err) {
        console.log(err)
        alert("Pokémon not found");
    }
}

const showSearchPokemon = data => {
    const { name, id, sprites, types, height, weight, stats } = data;
        
    pokemonName.textContent = name.toUpperCase();
    pokemonId.textContent = `#${id}`;
    cardImage.innerHTML = `
    <img src=${sprites.front_default} alt="pokemon-img" id="sprite" class="pokemon-img">
    `;

    types.map(type => {
        pokemonTypes.innerHTML = `<span class="type ${type.type.name}">${type.type.name.toUpperCase()}</span> `;
    })


    pokemonHp.textContent = `${stats[0].base_stat}HP`;
    pokemonWeight.innerHTML = `
        <p>Weight</p>
        <p class="stat">${weight}</p>
    `;
    pokemonHeight.innerHTML = `
        <p>Height</p>
        <p class="stat">${height}</p>
    `;
    pokemonAttack.innerHTML = `
        <p>Attack</p>
        <p class="stat">${stats[1].base_stat}</p>
    `;
    pokemonDefense.innerHTML = `
        <p>Defense</p>
        <p class="stat">${stats[2].base_stat}</p>
    `;
    pokemonSpecialAttack.innerHTML = `
        <p>Special Attack</p>
        <p class="stat">${stats[3].base_stat}</p>
    `;
    pokemonSpecialDefense.innerHTML = `
        <p>Special Defense</p>
        <p class="stat">${stats[4].base_stat}</p>
    `;
    pokemonSpeed.innerHTML = `
        <p>Speed</p>
        <p class="stat">${stats[5].base_stat}</p>
    `;

}



searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(searchInput.value);
    searchInput.value = "";
})
