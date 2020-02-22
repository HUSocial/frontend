// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("mainHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// Show online friends //
var fr = {
  list : function () {
  // list() : show list of users
    // AJAX data
    var data = new FormData();
    data.append('online', 'show-users');

    // AJAX call
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "friends.php", true);
    xhr.onload = function(){
      document.getElementById("user-list").innerHTML = this.response;
    };
    xhr.send(data);
  },



// Display announcements //
var fr = {
  list : function () {
  // list() : show announcements
    // AJAX data
    var data = new FormData();
    data.append('announcements');

    // AJAX call
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "announcements.php", true);
    xhr.onload = function(){
      document.getElementById("announce").innerHTML = this.response;
    };
    xhr.send(data);
  },



//Methods neded
//  Logout.php --Added for next sprint
//  post_comments.php
//  friends.php
//  announcements.php
//  a method that takes the post and stores it into the comment section
