document.addEventListener("DOMContentLoaded", () => {
    const credits = document.querySelectorAll(".credit");
    let currentCredit = 0;

    function showNextCredit() {
        if (currentCredit > 0) {
            credits[currentCredit - 1].style.opacity = 0;
        }
        if (currentCredit < credits.length) {
            setTimeout(() => {
                credits[currentCredit].style.opacity = 1;
                currentCredit++;
                setTimeout(showNextCredit, 3000); // 3 seconds delay
            }, 2000); // Delay for fade-out effect
        } else{
            setTimeout(() => {
                window.location.href = "../html/initialPage.html"
            },2000);
        }
    }

    showNextCredit();
});
