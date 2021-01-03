
let pokemonRepository= (function(){
    let repository= [
    {
        name: 'Pikachu',
        height: 2,
        types: 'grass',
    },
    {
        name: 'Bulbasaur',
        height: 3,
        types: 'fire',
    },
    {
        name: 'Chikadex',
        height: 7,
        types: 'water',
    },
];

function add(pokemon){
    if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
}
function getAll(){
    return repository;
}
function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListner('click', function(event){
        showDetails(pokemon);
    });
  }
  function showDetails(pokemon){
    console.log('pokemon');
  }
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem};    
})();

pokemonRepository.add({name: 'Saunasurdex', height:6.3, types: 'Electric'});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);  
});

