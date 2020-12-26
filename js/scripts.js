let pokemonRepository= (function(){
    let pokemonList= [
    {
        name: 'Pikachu',
        height: 2,
        type: 'grass',
    },
    {
        name: 'Bulbasaur',
        height: 3,
        type: 'fire',
    },
    {
        name: 'Chikadex',
        height: 7,
        type: 'water',
    }
];
function add(pokemon){
  pokemonList.push(pokemon);
}
function getAll(){
    return pokemonList;
}
return {
  add: add,
  getAll: getAll};
})();

pokemonRepository.add({name: 'Saunasurdex', height:6.3});
pokemonRepository.getAll().forEach(function(pokemon){
    console.log(pokemon);
});

