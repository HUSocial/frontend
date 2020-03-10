console.log('signup render');

//Call button from HTML page.
const Sign_Button = document.getElementById('signupButton');

//Event handlers for buttons.
Sign_Button.onclick = attemptSignUp;

var text1 = document.getElementById('SignUpText');

//Show an element.
var show = function (elem) {
  elem.classList.add('is-visible');
};

//Hide an element.
var hide = function (elem) {
  elem.classList.remove('is-visible');
};

//Toggle element visibility.
var toggle = function (elem) {
  elem.classList.toggle('is-visible');
};

function attemptSignUp() {

  hide(text1);
  console.log('SignUp Button Clicked!');

}
