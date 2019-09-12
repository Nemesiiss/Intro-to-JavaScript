var pokemonRepository = (function() {
  var repo = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    repo.unshift(pokemon);
  }

  function addList(pokemon) {
    var $pokemonList = document.querySelector(".pokemon-list");
    var $list = document.createElement("li");
    var $button = document.createElement("button");
    $button.innerHTML = pokemon.name;
    $button.classList.add("button");
    $list.appendChild($button);
    $pokemonList.appendChild($list);
    $button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
      showModal(item);
    });
  }

  function getAll() {
    return repo;
  }
  function remove(pokemon) {
    repo.pop(pokemon);
  }
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  function loadDetails(pokemon) {
    var url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the pokemon
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = [];
        for (var i = 0; i < details.types.length; i++) {
          pokemon.types.push(details.types[i].type.name);
        }
        if (pokemon.types.includes("grass")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("fire")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("psychic")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("poison")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("water")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("bug")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("flying")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("rock")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("ice")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("electric")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("ghost")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("ground")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("steel")) {
          document.getElementById("modal").style.background = "green";
        } else if (pokemon.types.includes("fairy")) {
          document.getElementById("modal").style.background = "green";
        }
        pokemon.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          pokemon.abilities.push(details.abilities[i].ability.name);
        }

        pokemon.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function showModal(item) {
    var $modalContainer = document.querySelector("#modal");
    $modalContainer.innerHTML = "";
    var modal = document.createElement("div");
    modal.classList.add("modal");
    var closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.innerText = "close";
    closeButton.addEventListener("click", hideModal);
    var title = document.createElement("h1");
    title.innerText = item.name;
    var imageElement = document.createElement("img");
    imageElement.classList.add("modal-img");
    imageElement.setAttribute("src", item.imageUrl);
    var heightElement = document.createElement("p");
    heightElement.innerText = "Height : " + item.height;
    var weightElement = document.createElement("p");
    weightElement.innerText = "Weight : " + item.weight;
    var typesElement = document.createElement("p");
    typesElement.innerText = "Types : " + item.types;
    var abilitiesElement = document.createElement("p");
    abilitiesElement.innerText = "Abilities : " + item.abilities;
    modal.appendChild(closeButton);
    modal.appendChild(title);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(typesElement);
    modal.appendChild(abilitiesElement);
    $modalContainer.appendChild(modal);
    $modalContainer.classList.add("is-visible");
  }
  function hideModal() {
    var $modalContainer = document.querySelector("#modal");
    $modalContainer.classList.remove("is-visible");
  }
  //hides modal when clicked on ESC on keyboard
  window.addEventListener("keydown", e => {
    var $modalContainer = document.querySelector("#modal");
    if (
      e.key === "Escape" &&
      $modalContainer.classList.contains("is-visible")
    ) {
      hideModal();
    }
  });
  var $modalContainer = document.querySelector("#modal");
  $modalContainer.addEventListener("click", e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addList: addList,
    remove: remove,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(item) {
    pokemonRepository.addList(item);
  });
});

console.log(pokemonRepository.getAll());
