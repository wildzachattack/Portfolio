var slideIndexLgnd = 1;
var slideIndexApp = 1;
var slideIndexPC = 1;
var slideIndexPkmn = 1;

function plusDivsinLGND(n) { //Organizes the demo pics for Legend Lost game. Makes only one image display at a time.
  var tempSlide = slideIndexLgnd += n;
  var lgndLength = document.getElementsByClassName("mySlidesLGND");
  for (var i = 0; i < lgndLength.length; i++) {
     lgndLength[i].style.display = "none";
  }
  if (tempSlide > lgndLength.length) {
    slideIndexLgnd = 1;
  }
  if (tempSlide < 1) {
    slideIndexLgnd = lgndLength.length;
  }
  lgndLength[slideIndexLgnd - 1].style.display = "block";
}

function plusDivsinAPP(n) { //Organizes the demo pics for APP project. Makes only one image display at a time.
  var tempSlide = slideIndexApp += n;
  var appLength = document.getElementsByClassName("mySlidesAPP");
  for (var i = 0; i < appLength.length; i++) {
     appLength[i].style.display = "none";
  }
  if (tempSlide > appLength.length) {
    slideIndexApp = 1;
  }
  if (tempSlide < 1) {
    slideIndexApp = appLength.length;
  }
  appLength[slideIndexApp - 1].style.display = "block";
}

function plusDivsinPC(n) { //Organizes the demo pics PC project. Makes only one image display at a time.
  var tempSlide = slideIndexPC += n;
  var pcLength = document.getElementsByClassName("mySlidesPC");
  if (tempSlide > pcLength.length) {
    slideIndexPC = 1;
  }
  if (tempSlide < 1) {
    slideIndexPC = pcLength.length;
  }
  for (var i = 0; i < pcLength.length; i++) {
     pcLength[i].style.display = "none";
  }
  pcLength[slideIndexPC - 1].style.display = "block";
}

function plusDivsinPKMN(n) { //Organizes the demo pics for PKMN game. Makes only one image display at a time.
  var tempSlide = slideIndexPkmn += n;
  var pkmn_length = document.getElementsByClassName("mySlidesPKMN");
  if (tempSlide > pkmn_length.length) {
    slideIndexPkmn = 1;
  }
  if (tempSlide < 1) {
    slideIndexPkmn = pkmn_length.length;
  }
  for (var i = 0; i < pkmn_length.length; i++) {
    pkmn_length[i].style.display = "none";
  }
  pkmn_length[slideIndexPkmn - 1].style.display = "block";
}

function navSandwhichBar() { //makes topnav responsive
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav")
    nav.className += " responsive";
  else
    nav.className = "topnav";
}

function toggle_visibility(id) { //Hides and unhides popup for portfolio page
  var e = document.getElementById(id);
  var footer = document.getElementById("footer")
  if(e.style.display == 'block') {
    e.style.display = 'none';
    footer.style.display = 'block';
  }
  else {
    e.style.display = 'block';
    footer.style.display ='none';
  }
}
