document.addEventListener("DOMContentLoaded", () => {
    //Direciona à página de requisição ao clicar no botão
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        window.location.href = "../html/sortPokemon.html";
    });
});