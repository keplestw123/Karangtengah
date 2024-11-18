document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".card");

    articles.forEach((article) => {
        const toggleButton = article.querySelector(".toggle-button");
        const details = article.querySelector(".details");

        toggleButton.addEventListener("click", () => {
            details.classList.toggle("show-details");
        });
    });
});
