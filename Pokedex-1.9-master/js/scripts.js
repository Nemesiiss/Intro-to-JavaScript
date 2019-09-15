var pokemonRepository = (function() {
  var repo = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=891";

  function add(pokemon) {
    repo.unshift(pokemon);
  }

  function addList(pokemon) {
    var $pokemonList = $(".pokemon-list");
    var $list = $("<li class='list'>");
    var $button = $("<button class='button'>" + pokemon.name + "</button>");
    $list.append($button);
    $pokemonList.append($list);
    $button.on("click", function(event) {
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
    return $.ajax(apiUrl)
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url)
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        //loop for each ofthe pokemon types.
        //Also changing the background color depend on each pokemon type.
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        if (item.types.includes("grass")) {
          $("#modal").css("background-color", "lightgreen");
        } else if (item.types.includes("fire")) {
          $("#modal").css("background-color", "red");
        } else if (item.types.includes("psychic")) {
          $("#modal").css("background-color", "#FF69B4");
        } else if (item.types.includes("poison")) {
          $("#modal").css("background-color", "purple");
        } else if (item.types.includes("water")) {
          $("#modal").css("background-color", "blue");
        } else if (item.types.includes("bug")) {
          $("#modal").css("background-color", "#3f000f");
        } else if (item.types.includes("rock")) {
          $("#modal").css("background-color", "#BC8F8F");
        } else if (item.types.includes("flying")) {
          $("#modal").css("background-color", "#2F4F4F");
        } else if (item.types.includes("electric")) {
          $("#modal").css("background-color", "gold");
        } else if (item.types.includes("ice")) {
          $("#modal").css("background-color", "#4169E1");
        } else if (item.types.includes("ghost")) {
          $("#modal").css("background-color", "#8B008B");
        } else if (item.types.includes("ground")) {
          $("#modal").css("background-color", "#D2B48C");
        } else if (item.types.includes("fairy")) {
          $("#modal").css("background-color", "#EE82EE");
        } else if (item.types.includes("steel")) {
          $("#modal").css("background-color", "#708090");
        }

        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }

        item.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function showModal(item) {
    var $modalContainer = $("#modal");
    $modalContainer.empty();
    var modal = $("<div class='modal'></div>");

    var closeButton = $("<button class='modal-close'>Close</button>");

    closeButton.on("click", hideModal);
    var title = $("<h1>" + item.name + "</h1>");

    var imageElement = $("<img class='modal-img'>");

    imageElement.attr("src", item.imageUrl);
    var heightElement = $("<p>" + "Height : " + item.height + "</p>");

    var weightElement = $("<p>" + "Weight : " + item.weight + "</p>");

    var typesElement = $("<p>" + "Types : " + item.types + "</p>");

    var abilitiesElement = $("<p>" + "Abilities : " + item.abilities + "</p>");

    modal.append(closeButton);
    modal.append(title);
    modal.append(imageElement);
    modal.append(heightElement);
    modal.append(weightElement);
    modal.append(typesElement);
    modal.append(abilitiesElement);
    $modalContainer.append(modal);
    $modalContainer.addClass("is-visible");
  }
  function hideModal() {
    var $modalContainer = $("#modal");
    $modalContainer.removeClass("is-visible");
  }
  //hides modal when clicked on ESC on keyboard
  jQuery(window).on("keydown", e => {
    var $modalContainer = $("#modal");
    if (e.key === "Escape" && $modalContainer.hasClass("is-visible")) {
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

//console.log(pokemonRepository.getAll());
