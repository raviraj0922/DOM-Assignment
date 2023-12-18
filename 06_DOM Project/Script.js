const headerElement = document.querySelector("header");

// Create a new image element
const newImage = document.createElement("img");
newImage.src = "./assets/ineuron-logo.png"; // Replace with the path to your new image
newImage.alt = "New Logo";
newImage.classList.add("logo"); // Copy the class from the original image

// Replace the original image inside the header with the new one
headerElement.replaceChild(newImage, headerElement.firstChild);

// replace the price tag from 4$to 10$
const divpri = document.querySelector(".app_price");
const spanpri = divpri.querySelector("span");
spanpri.textContent = "$10";
