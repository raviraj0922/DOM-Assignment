// Create a new div element
const newDiv = document.createElement("div");

newDiv.textContent = "I have been awarded with best influencer of 2021. I am also one of the top contributor of the open source projects over the Github, which can be seen in my Github profile.";
newDiv.style.padding = '15px';

const thirdChildDiv = document.querySelector('.accordian:nth-child(3)');
thirdChildDiv.appendChild(newDiv);

// Create a new div element
const newDiv1 = document.createElement("div");

newDiv1.textContent = "Some of my popular hobbies are travelling and exploring the new technologies from all over the world.";
newDiv1.style.padding = '15px';

const fourthChildDiv = document.querySelector('.accordian:nth-child(4)');
fourthChildDiv.appendChild(newDiv1);

// Create the new div as skills
const addnewdiv = document.createElement('div');
addnewdiv.classList = 'accordian';
const h3tag = document.createElement('h3');
h3tag.textContent = 'Skills';
addnewdiv.appendChild(h3tag);
const paratag = document.createElement('p');
paratag.textContent = 'I posses a very good commond over the Full Stack Development technologies like MERN which can be seen in my work over Github.';
addnewdiv.appendChild(paratag);
const fifthdiv = document.querySelector('.accordian-wrapper');
fifthdiv.appendChild(addnewdiv);
// Add new div element
const newDiv2 = document.createElement("div");
newDiv2.textContent = "I posses a very good commond over the Full Stack Development technologies like MERN which can be seen in my work over Github.";
newDiv2.style.padding = '15px';

const fifthChildDiv = document.querySelector('.accordian:nth-child(5)');
fifthChildDiv.appendChild(newDiv2);