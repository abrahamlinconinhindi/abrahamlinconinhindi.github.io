// counter variable to track the number of times the file has been opened
let counter = 0;

// function to increment the counter and check if it has reached 100 or 10000
function checkCounter() {
  counter++;
  if (counter === 100 || counter === 10000) {
    pricePop();
  }
}

// function to display the popup window
function pricePop() {
  let popup = document.createElement("div");
  popup.setAttribute("id", "pricePop");
  popup.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px;";

  let message = document.createElement("p");
  message.innerHTML = "Congratulations! You are our " + counter + "th visitor. Click here to claim your price.";
  popup.appendChild(message);

  let claimBtn = document.createElement("button");
  claimBtn.innerHTML = "Claim Price";
  claimBtn.addEventListener("click", function() {
    alert("Thank you for claiming your price! Our team will contact you soon.");
  });
  popup.appendChild(claimBtn);

  let imageBox = document.createElement("img");
  imageBox.src = "https://www.pngkey.com/png/full/81-816220_confused-smiley-face-transparent-png-emoticon-frown.png";
  imageBox.style.cssText = "display: block; margin: auto;";
  popup.appendChild(imageBox);

  document.body.appendChild(popup);
}

// call the checkCounter function on page load
window.onload = checkCounter;

// add a global variable 'debug' to the window object
window.debug = {
    pricepop: pricePop // add the pricePop function to the debug object
}
