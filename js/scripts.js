
let pokemonRepository= (function(){
    let pokemonList= [];
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon){
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
      pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
}
function getAll(){
    return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', () => {
      showDetails(pokemon);
  });
}

function loadList(){
  let pokemonList = document.querySelector(".pokemon-list");
  let showLoadingMessage= document.createElement('div');
  let heading = document.createElement('h1');      
        showLoadingMessage.classList.add('.content-loading');
        heading.innerText= 'Loading Content';
        showLoadingMessage.appendChild(heading);
        console.log(heading.innerText);
  return fetch(apiUrl).then(function(response){
    // let hideLoadingMessage= document.querySelector('heading');
    // hideLoadingMessage.showLoaadingMessage.removeChild('hideLoadingMessage');
    return response.json();
  }).then(function(json){
    return json.results.forEach(function(item){
      let pokemon={
        name: item.name,
        detailsUrl: item.url
      };
      add (pokemon);
      console.log(pokemon);
    });
  }).catch(function(e){
      console.error(e);
    })
}

function loadDetails(item){
  let pokemonList = document.querySelector(".pokemon-list");
  let showLoadingMessage= document.createElement('div');
  let h1 = document.createElement('h1');      
        showLoadingMessage.classList.add('.content-loading');
        h1.innerText= 'Loading Content';
        showLoadingMessage.appendChild(h1);
        console.log(h1.innerText);
  let url= item.detailsUrl;
  return fetch(url).then(function(response){
    return response.json();
  }).then(function(details){
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
  }).catch(function(e){
    console.error(e);
  });
}

function showDetails(item){
  pokemonRepository.loadDetails(item).then(function(){
    console.log(item);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
  };    
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

