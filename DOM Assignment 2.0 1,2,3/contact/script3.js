// change the placehoder of the form "User Output Board"
const inputfield = document.querySelector('.mainLeftDetails');
const oldplace = inputfield.querySelector('.enterName');
oldplace.placeholder = 'FSJS2.0';
const oldplace2 = inputfield.querySelector('.enterMail');
oldplace2.placeholder = 'fsjs@ineuron.ai';
const oldplace3 = inputfield.querySelector('.enterMessage');
oldplace3.placeholder = 'Hello World';

// change the placehoder of the form "User Input Board"
const newNamePlaceholder = "FSJS2.0";
const nameElements = document.getElementsByClassName('userName');
      for (var i = 0; i < nameElements.length; i++) {
        nameElements[i].setAttribute('placeholder', newNamePlaceholder);
      }
const newEmailPlaceholder = "fsjs@ineuron.ai";
const EmailElements = document.getElementsByClassName('userEmail');
      for (var i = 0; i < EmailElements.length; i++) {
        EmailElements[i].setAttribute('placeholder', newEmailPlaceholder);
      }
const newMessagePlaceholder = "Hello World";
const MessageElements = document.getElementsByClassName('userMessage');
      for (var i = 0; i < MessageElements.length; i++) {
        MessageElements[i].setAttribute('placeholder', newMessagePlaceholder);
      }