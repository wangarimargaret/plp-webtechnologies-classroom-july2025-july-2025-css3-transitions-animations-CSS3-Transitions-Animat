// 🕒 Function to get animation duration based on speed
function getAnimationDuration(speed) {
  if (speed === "fast") return 10000;     // If speed is "fast", return 500 milliseconds
  if (speed === "slow") return 1500;    // If speed is "slow", return 1500 milliseconds
  return 1000;                          // Default duration if speed is unknown
}

// 🎬 Function to animate an element with a given speed
function animateElement(selector, speed) {
  const element = document.querySelector(selector); // Selects the element using a CSS selector
  const duration = getAnimationDuration(speed);     // Gets the animation duration based on speed

  element.classList.add("animate");                 // Adds the "animate" class to trigger CSS animation

  setTimeout(() => {
    element.classList.remove("animate");            // Removes the class after the animation duration
  }, duration);                                     // Waits for the duration before removing
}

// ⚡ Function to handle fast animation button click
function handleFastClick() {
  animateElement(".box", "fast");                   // Animates the box with fast speed
}

// 🐢 Function to handle slow animation button click
function handleSlowClick() {
  animateElement(".box", "slow");                   // Animates the box with slow speed
}

// 🖱 Add click event listeners to buttons
document.getElementById("animateBtn").addEventListener("click", handleFastClick);     // Triggers fast animation
document.getElementById("slowAnimateBtn").addEventListener("click", handleSlowClick); // Triggers slow animation

// 🃏 Add click event to flip the card
document.querySelector(".card").addEventListener("click", function () {
  this.classList.toggle("flipped");                 // Toggles the "flipped" class to rotate the card
});

// 🔄 Loader animation that toggles every 3 seconds
const loader = document.querySelector(".loader");   // Selects the loader element
setInterval(() => {
  loader.classList.toggle("active");                // Toggles the "active" class to show/hide animation
}, 3000);                                           // Runs every 3000 milliseconds (3 seconds)

// 🪟 Show/hide modal when "m" key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "m") {                // Checks if the pressed key is "m"
    document.querySelector(".modal").classList.toggle("visible"); // Toggles modal visibility
  }
});