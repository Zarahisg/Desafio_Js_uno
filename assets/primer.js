const amount = document.querySelector("#amount");
const price = document.querySelector("#price");
const btn = document.querySelector("#btn");
const color = document.querySelector("#color");
const priceTotal = document.querySelector("#priceTotal");
const amountTotal = document.querySelector("#amountTotal");
const buttomTotal = document.querySelector("#buttomTotal");

btn.addEventListener("click", () => {
  amountTotal.textContent = "Cantidad: " + amount.value;
  let price = 10000;
  priceTotal.textContent = "Total: $" + price * amount.value;
});

function cambiaColor(color) {
  let buttomTotal = document.getElementById("buttomTotal");
  buttomTotal.style.backgroundColor = color.value;
}