document.addEventListener("DOMContentLoaded", function() {
    const requestButton = document.getElementById("request-button");    
    const audioWho = document.getElementById("audio-who");
    const searchBarButton = document.getElementById("searchbar-button");

    //Toca o áudio por 6 segundos antes de fazer a requisição
    requestButton.addEventListener("click", () => {
        playAudioThenFetch();
    });

    //Obtém o valor do campo de entrada do botão de pesquisa e chama a função 'fetchPokemon' se não tiver vazio
    searchBarButton.addEventListener("click", () => {
        const searchBar = document.getElementById("searchBar");
        const query = searchBar.value.trim();
        if (query){
            fetchPokemon(query)
        }
    })

    function playAudioThenFetch() {
        audioWho.currentTime = 0;
        audioWho.play();
        
        setTimeout(() => {
            fetchPokemon();
        }, 6000);
    }

    // Requisição HTTP da API GET e obtenção de dados
    function fetchPokemon(name = '') {
        let apiUrl = 'https://dev-api-teste.mandarin.com.br/pokemons';

        // Se passado um name como parâmetro, ele adiciona à URL da API para filtrar os resultados pelo nome do Pokémon
        if (name){
            apiUrl += `?name=${encodeURIComponent(name)}`;
        }
        
        fetch(apiUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data parsed as JSON:', data);

                
                if (name) {
                    if (data.length === 0) { //Se a pesquisa não retornar dados, ela atualiza a interface com a tela de 404 error chamando essa função.
                        updateInterfaceErro();
                    } else {        //Se a pesquisa retornar dados, ela atualiza a interface com o primeiro Pokémon retornado.
                        updateInterface(data[0]);
                    }
                } else {
                    const randomIndex = Math.floor(Math.random() * data.length); //A cada requisição ele traz aleatóriamente um pokémon da array
                    const randomPokemon = data[randomIndex];
                    updateInterface(randomPokemon);
                }
                
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

        imageElement.src = pokemon.image_url;
        imageElement.classList.add('small');
        imageContainer.style.backgroundImage = `url(${pokemon.background_image_url})`;

        nameElement.textContent = pokemon.name;
        typeElement.textContent = `${pokemon.category} type Pokémon`;

        requestButton.textContent = "Gerar novo Pokemón";
        attackButton.textContent = 'Attack';
        runAwayButton.textContent = 'Run Away';
    };

    function updateInterfaceErro(){
        const nameElement = document.getElementById('name');
        const typeElement = document.getElementById('type');
        const imageElement = document.getElementById('pokemon-image');
        const attackButton = document.getElementById('attack');
        const runAwayButton = document.getElementById('runAway');
        const imageContainer = document.getElementById('image-container');

        imageElement.src = "../assets/images/404.error.png";
        imageElement.classList.remove('small');

        imageContainer.style.backgroundImage = "none";
        nameElement.textContent = "Pokemón não encontrado! 😕";
        typeElement.textContent = "??????";
        attackButton.textContent = '??????';
        runAwayButton.textContent = '??????';
    };
});