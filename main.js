document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("change-background-btn");

    btn.addEventListener("click", function() {
        const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#99ffff", "#ff99ff", "#f9f9f9"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
