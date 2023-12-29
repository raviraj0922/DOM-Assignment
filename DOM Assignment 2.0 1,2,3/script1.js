// adding the support me into the hero-right-section-btns
const parentdiv = document.querySelector(".hero-right-section-btns");
const newbutton = document.createElement("button")
newbutton.textContent = "Support Me";

parentdiv.appendChild(newbutton);

// add avatar to the profile picture
const avatrimg = document.querySelector(".hero-right-section");
const newImg = avatrimg.querySelector("img");
newImg.src = "./avatar-1.png";

// add nav unordered list
const unlist = document.querySelector('nav');
const newunlist = unlist.querySelector('ul');
const newlist = document.createElement('li');
let newanchor = document.createElement('a');
newanchor.href = '#';
newanchor.textContent = 'Hire Me';
newlist.appendChild(newanchor);
newunlist.appendChild(newlist);

// change the placehoder of the search
const searchfield = document.querySelector('.search-field');
const oldplace = searchfield.querySelector('input');
oldplace.placeholder = 'Search My Project';

// change the text of the discription
const herosection = document.querySelector('.hero-left-section');
const parsect = herosection.querySelector('p');
const spansect3 = parsect.querySelector('span:nth-child(3)');
spansect3.textContent = 'an Employee';
const spansect5 = parsect.querySelector('span:nth-child(5)');
spansect5.textContent = "iNeuron intelligence Pvt Ltd";
