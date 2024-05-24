const totalPrice = document.querySelector("[total-price]")
const totalOutput = document.querySelector("[output]")

const femaleDetails = {
  size: document.getElementById("femaleSize"),
  color: document.getElementById("femaleColor"),
  price: document.getElementById("femalePrice"),
  quantity: document.getElementById("femaleQuantity"),
  total: document.getElementById("femaleTotal"),
}

const maleDetails = {
  size: document.getElementById("maleSize"),
  color: document.getElementById("maleColor"),
  price: document.getElementById("malePrice"),
  quantity: document.getElementById("maleQuantity"),
  total: document.getElementById("maleTotal"),
};

femaleDetails.quantity.addEventListener("change", () => {
  let price = +femaleDetails.price.innerText;
  let quantity = +femaleDetails.quantity.value;

  let calTotal = parseFloat(price * quantity);
  femaleDetails.total.innerText = calTotal.toFixed(2);
});

maleDetails.quantity.addEventListener("change", () => {
  let price = +maleDetails.price.innerText;
  let quantity = +maleDetails.quantity.value;

  let calTotal = parseFloat(price * quantity);
  maleDetails.total.innerText = calTotal.toFixed(2);
});

totalPrice.addEventListener("click", () => {
  let femaleTotal = parseFloat(femaleDetails.total.innerText);
  let maleTotal = parseFloat(maleDetails.total.innerText);

  const addTotal = (female, male) => {
    if (female && male) {
      return female + male;
    } else if (female) {
      return female;
    } else {
      return male;
    }
  };

  let total = addTotal(femaleTotal, maleTotal)

  if (total) {
    totalOutput.classList.remove("error")
    totalOutput.innerText = total.toFixed(2)
  } else {
    totalOutput.innerText = "No item selected"
    totalOutput.classList.add("error")
  }
})
