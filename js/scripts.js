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
  if(typeof pokemon!== "object")
  alert(Please enter an object))
}
function getAll(){
    return pokemonList;
}
return {
  add: add,
  getAll: getAll};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'pikachu', height:6.3});
console.log(pokemonRepository.getAll());