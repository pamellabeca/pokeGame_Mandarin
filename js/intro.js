document.addEventListener("DOMContentLoaded", () => {
    const credits = document.querySelectorAll(".credit");
    let currentCredit = 0;

    // Delay de um crédito para outro de 2 segundos e ao fim direciona à página inicial
    function showNextCredit() {
        if (currentCredit > 0) {
            credits[currentCredit - 1].style.opacity = 0;
        }
        if (currentCredit < credits.length) {
            setTimeout(() => {
                credits[currentCredit].style.opacity = 1;
                currentCredit++;
                setTimeout(showNextCredit, 3000);
            }, 2000);
        } else{
            setTimeout(() => {
                window.location.href = "../html/initialPage.html"
            },2000);
        }
    }

    showNextCredit();
});
