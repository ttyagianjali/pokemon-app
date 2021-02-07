let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }
  function getAll() {
    return pokemonList;
  }

  // function addListItem(pokemon) {
  //   let pokemonList = document.querySelector('.pokemon-list');
  //   let listpokemon = document.createElement('li');
  //   listpokemon.classList.add('group-list-item');
  //   let button = document.createElement('button');
  //   button.innerText = pokemon.name;
  //   button.classList.add('btn btn-primary');
  //   listpokemon.appendChild(button);
  //   pokemonList.appendChild(listpokemon);
  //   button.addEventListener('click', () => {
  //     showDetails(pokemon);
  //   });
  // }

  function loadList() {
    // loading function called here.
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        return json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.name = details.name;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    add: add,
    getAll: getAll,
    // addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    // showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
