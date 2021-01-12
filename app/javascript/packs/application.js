// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// var sentence = [];
// var form_val = document.getElementsByClassName("type");

// document.addEventListener("keypress", function (event) {
//   sentence.push(event.key);
//   console.log(sentence);
//   form_val[0].value = sentence.join("");
// });

// function checkSubmit(e) {
//   if (e && e.keyCode == 13) {
//     document.forms[0].submit();
//   }
// }
