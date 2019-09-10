


var pokemonRepository = (function () {
  var repo = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  // Other functions remain here



  function add(pokemon) {
    repo.unshift(pokemon);
  }

  function addList(pokemon) {
    var $pokemonList = document.querySelector('.pokemon-list')
    var $list = document.createElement('li');
    var $button = document.createElement('button');
    $button.innerHTML = pokemon.name;
    $button.classList.add('button');
    $list.appendChild($button);
    $pokemonList.appendChild($list);
    $button.addEventListener('click', function (event) {
      showDetails(pokemon)
    })
  }
  function showDetails(pokemon) {
    console.log(pokemon)
  }
  

  function getAll() {
    return repo;
  }
  function remove(pokemon) {
    repo.pop(pokemon);
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }
  return {
    add: add,
    getAll: getAll,
    addList:addList,
    remove: remove,
    loadList: loadList,
    loadDetails: loadDetails

  };
})();

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addList(pokemon);
  })
});

console.log(pokemonRepository.getAll());
