document.addEventListener("DOMContentLoaded", function() {
    // Requisição HTTP da API GET e obtenção de dados
    const requestButton = document.getElementById("request-button");    
    requestButton.addEventListener("click", fetchPokemon);

    function fetchPokemon() {
        const apiUrl = 'https://dev-api-teste.mandarin.com.br/pokemons';
        
        fetch(apiUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data parsed as JSON:', data);
                const randomIndex = Math.floor(Math.random() * data.length); //A cada requisição ele traz aleatóriamente um pokémon da array
                const randomPokemon = data[randomIndex];
                updateInterface(randomPokemon);
            })
            .catch(error => console.log("Error when fetching data from API", error));  
    };

    // Atualização do HTML com os dados da API
    function updateInterface(pokemon) {     
        const nameElement = document.getElementById('name');
        const typeElement = document.getElementById('type');
        const imageElement = document.getElementById('pokemon-image');
        const imageContainer = document.getElementById('image-container');
        const attackButton = document.getElementById('attack');
        const runAwayButton = document.getElementById('runAway');
        const requestButton = document.getElementById('request-button');

        imageElement.src = pokemon.image_url;
        imageElement.classList.add('small');
        imageContainer.style.backgroundImage = `url(${pokemon.background_image_url})`;

        nameElement.textContent = pokemon.name;
        typeElement.textContent = `${pokemon.category} type Pokémon`;

        requestButton.textContent = "Gerar novo Pokemón";
        attackButton.textContent = 'Attack';
        runAwayButton.textContent = 'Run Away';
    }
});