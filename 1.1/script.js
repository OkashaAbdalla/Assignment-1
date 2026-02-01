// Select the button element with ID "revealBtn"
const button = document.getElementById("revealBtn");

// Select the paragraph element with ID "message"
const paragraph = document.getElementById("message");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Change the paragraph's text when the button is clicked
  paragraph.textContent = "JavaScript is running!";

  // Change the button's text to indicate the action is done
  button.textContent = "Done!";
});