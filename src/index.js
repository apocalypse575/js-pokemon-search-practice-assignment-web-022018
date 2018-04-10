document.addEventListener("DOMContentLoaded", function() {
  var pokemons = pokemon.pokemons
  for(var i = 0; i < pokemons.length; i++) {
    let pokemon = new Pokemon(pokemons[i].name, pokemons[i].sprites.front, pokemons[i].sprites.back, pokemons[i].order )
  }

  let pokemonInput = document.getElementById('pokemon-search-input')
  let pokemonContainer = document.getElementById('pokemon-container')
  let searchterm = ""

  function findPokemon(e) {

    if (e.key === "Backspace"){
      searchterm = searchterm.slice(0,-1)
    } else if (e.key.length > 1) {

    }else if (/[A-Za-z]/.test(e.key)) {
      searchterm += e.key
    }

    let filteredpokemon = pokedex.filter(function(pokemon) {return pokemon.name.includes(searchterm.toLowerCase())})
    let renderedpokemon = filteredpokemon.map(pokemon => pokemon.render()).join('')

    pokemonContainer.innerHTML = renderedpokemon
  }

  pokemonInput.addEventListener('keydown', findPokemon)

})
