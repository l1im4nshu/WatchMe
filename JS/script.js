// Product Page Java Script

document.addEventListener("DOMContentLoaded", () => {
  // Add to cart button logic
  const addToCartBtns = document.querySelectorAll(".add-to-cart");
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    alert("Product added to cart successfully!");
    });
  });

  // Collapsible button logic
  const buttons = document.querySelectorAll(".collapsible-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    content.hidden = isExpanded;

    // Optional: Set display style for smooth UX
    content.style.display = isExpanded ? "none" : "block";
    });
  });
});


// Home Page Clock Java Script

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  // Format time to always have two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
