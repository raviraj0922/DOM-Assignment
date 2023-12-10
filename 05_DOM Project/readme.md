** changes were made through the script.js
```
// Inserting the new anchor tag into the div
const div = document.querySelector(".myDiv")
    let newAnchor = document.createElement("a")
    newAnchor.classList.add("btn")
    newAnchor.href = "index.html";
    newAnchor.textContent="Pro Subscription"
div.append(newAnchor)

// To insert the new div element inside the recipies list
const outDiv = document.querySelector(".recipe-gallery")
let newDiv = document.createElement("div")
newDiv.classList.add("card")
let anchor = document.createElement("a")
anchor.classList.add("recipe-text")
anchor.innerHTML = "<h4>New Recipe</h4>";
let par = document.createElement("p")
par.classList.add("recipe-disp")
par.textContent = "Discription";
anchor.append(par)
newDiv.append(anchor)
outDiv.append(newDiv)
```
