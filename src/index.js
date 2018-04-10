document.addEventListener("DOMContentLoaded", function() {
  var pokemons = pokemon.pokemons
  for(var i = 0; i < pokemons.length; i++) {
    let pokemon = new Pokemon(pokemons[i].name, pokemons[i].sprites.front, pokemons[i].sprites.back, pokemons[i].order )
  }

  let pokemonInput = document.getElementById('pokemon-search-input')
  let pokemonContainer = document.getElementById('pokemon-container')
  let searchterm = ""
  let flipCards = document.getElementsByTagName('a')

  function findPokemon(e) {

    if (e.key === "Backspace"){
      searchterm = searchterm.slice(0,-1)
    } else if (e.key.length > 1) {

    }else if (/[A-Za-z]/.test(e.key)) {
      searchterm += e.key
    }

    let filteredpokemon = pokedex.filter(function(pokemon) {return pokemon.name.includes(searchterm.toLowerCase())})
    let renderedpokemon = filteredpokemon.map(pokemon => pokemon.render(pokemon.frontImage)).join('')

    pokemonContainer.innerHTML = renderedpokemon
  }

  function flipCard(e){
    e.preventDefault()
    let parentPokemonElement = document.getElementById(`${e.target.parentElement.id}`)
    if (e.target.tagName ==="A"){
      let foundPokemon = pokedex.find((poke) => (poke.name === e.target.id))
      if (parentPokemonElement.getElementsByClassName("image")[0].src === foundPokemon.frontImage){
        parentPokemonElement.innerHTML = foundPokemon.render(foundPokemon.backImage)
      }
      else{
        parentPokemonElement.innerHTML = foundPokemon.render(foundPokemon.frontImage)
      }
    }
  }

  pokemonInput.addEventListener('keydown', findPokemon)
  pokemonContainer.addEventListener('click', flipCard)

})
