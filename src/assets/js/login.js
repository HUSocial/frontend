console.log('login render');

//Call button from HTML page.
const Login_Button = document.getElementById('loginButton');

//Event handlers for buttons.
Login_Button.onclick = attemptLogin;

var text1 = document.getElementById('loginText');

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

function attemptLogin() {

  hide(text1);
  console.log('Login Button Clicked!');
  /*
  Create database connection here and verify.
  Anything else backend decides necessary upon
  Login button click.
  Will also be used to load main page of website
  upon successful login.
  */
}
