document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Olá, meu nome é Pamella! Bem-vindo(a) ao jogo Pokémon!",
        "Pronto(a) para começar?",
        "Esse jogo é um desafio proposto pela Agência Mandarin para vaga de estágio em Desenvolvimento.",
        "Não esqueça de aumentar o volume para uma melhor experiência!",
        "Clique no botão 'Gerar Pokémon' para começar, ou pesquise o desejado na barra e clique na lupa.",
        "Ah! Os botões de 'Atack' e 'Run Away' não funcionam, tá?"
    ];
    
    let currentMessageIndex = 0;
    
    const messageElement = document.getElementById("message");
    const nextButton = document.getElementById("next");
    const closeButton = document.getElementById("close");
    const avatarContainer = document.querySelector(".avatar-container");
    
    //Botão percorre e exibe o próximo da lista ao clicar
    nextButton.addEventListener("click", () => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.textContent = messages[currentMessageIndex];
    });
    
    //Botão deixa de exibir lista e avatar
    closeButton.addEventListener("click", () => {
        document.querySelector(".message-container").style.display = "none";
        avatarContainer.style.display = "none";
    });
});
