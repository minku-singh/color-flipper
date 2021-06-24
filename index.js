const colors = ["#34ea20", "red", "purple", "#345672", "orange", "yellow", "#051", "#349", "#230", "#234422"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function()
    {
        const randomNumber = Math.floor(Math.random()*colors.length);
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    }
)
