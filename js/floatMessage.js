document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Olá, meu nome é Pamella! Bem-vindo ao jogo Pokémon!",
        "Pronto(a) para começar?",
        "clique no botão 'Gerar Pokémon' para começar.",
        "Ah! os botões de 'Atack' e 'Run Away' não funcionam, tá?"
    ];
    
    let currentMessageIndex = 0;
    
    const messageElement = document.getElementById("message");
    const nextButton = document.getElementById("next");
    const closeButton = document.getElementById("close");
    const avatarContainer = document.querySelector(".avatar-container");
    
    nextButton.addEventListener("click", () => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.textContent = messages[currentMessageIndex];
    });
    
    closeButton.addEventListener("click", () => {
        document.querySelector(".message-container").style.display = "none";
        avatarContainer.style.display = "none";
    });
});