function triggerAlert() {
  alert("Your form has been submitted, Thank you!");
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
  let parentElement = sourceElement.parentElement; //declaring parentElement variable to get parent element.
  let valueDiv = parentElement.querySelector(".value"); //declaring valueDiv = telling computer
  //to find the class value.
  // valueDiv.innerHTML = "1";
  // console.log(sourceElement.innerHTML); //showing parent element.
  let buttonSign = sourceElement.innerHTML; //showing which button user is clicking +/-
  let quantity = valueDiv.innerHTML;
  quantity = parseInt(quantity);
  if (buttonSign === "+") {
    quantity++;
    valueDiv.innerHTML = quantity;
  } else if (buttonSign === "-" && quantity > 1) {
    quantity--;
    valueDiv.innerHTML = quantity;
  }
}

// function AlertIt() {
//   const answer = confirm("You will be leaving Github, click Ok to continue.");
//   if (answer)
//     window.location =
//       "https://www.webtoons.com/en/challenge/sweet-nightmare-call-to-action/list?title_no=795204";
// }
