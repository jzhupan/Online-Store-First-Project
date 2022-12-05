function triggerAlert() {
  alert("Your form has been submitted, Pink Du will reach out ASAP!");
}

function blurFunction(inputText) {
  let emailValidators = ["@hotmail.com", "@gmail.com", "@yahoo.com"];

  if (inputText.id === "firstName") {
    if (inputText.value === "") {
      inputText.style.background = "rgba(255,0,0.9,0.5)";
    } else {
      inputText.style.background = "none";
    }
  } else if (inputText.id === "email") {
    if (inputText.value === "") {
      inputText.style.background = "rgba(255,0,0.9,0.5)";
    } else {
      let valid = false;
      for (let i = 0; i < emailValidators.length; i++) {
        if (inputText.value.includes(emailValidators[i])) {
          valid = true;
        }
      }
      if (valid) {
        inputText.style.background = "none";
      } else {
        inputText.style.background = "rgba(255,0,0.9,0.5)";
      }
    }
  }
}

// inputText.style.background = "rgba(255,0,0.9,0.5)";

// function addToCart() {
//   document.getElementById("cartDemo").innerHTML = function () {
//     addToCart();
//   };
//   function addToCart() {
//     document.getElementById("cartDemo").innerHTML = "Added item to cart.";
//   }
// }

function changeQuantity(sourceElement) {
  let parentElement = sourceElement.parentElement;
  let valueDiv = parentElement.querySelector(".value");
  console.log(sourceElement.innerHTML);
  let button = sourceElement.innerHTML;
}
