function mostrarPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}


function changeBackground(imagePath, textColor) {
  var body = document.body;
  if (!body) return; 

  body.style.backgroundImage = "url('" + imagePath + "')";
  body.style.color = textColor;
  localStorage.setItem("backgroundImage", imagePath);
  localStorage.setItem("textColor", textColor);
  
  if (getComputedStyle(document.body).backgroundImage.includes('bg_PSPwp.png')) {

    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    header.style.backgroundColor = '#0b1e33';
    nav.style.backgroundColor = '#3f434c';
    header.style.backgroundImage = '';
  }
  

  else if (getComputedStyle(document.body).backgroundImage.includes('bg_desert.jpg')) {
   const body = document.querySelector('body');
    const header = document.querySelector('header');
    header.style.backgroundImage = 'url(img/bg_header.jpg)';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#b94800';
  }

  else{
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    header.style.backgroundColor = '#333';
    nav.style.backgroundColor = '#444';
    header.style.backgroundImage = '';
  }
}

var storedBackgroundImage = localStorage.getItem("backgroundImage");
if (storedBackgroundImage) {
  var body = document.body;
  if (body) { 
    body.style.backgroundImage = "url('" + storedBackgroundImage + "')";
  }
}

var storedTextColor = localStorage.getItem("textColor");
if (storedTextColor) {
  var body = document.body;
  if (body) { 
    body.style.color = storedTextColor;
  }

  
}


function changeImage(newSrc) {
  for (let i = 0; i < changeButtons.length; i++) {
    const img = changeButtons[i].querySelector("img");
    const oldSrc = img.getAttribute("src");
    img.setAttribute("src", newSrc);
    changeButtons[i].setAttribute("data-old-src", oldSrc);
  }
}

function changeImages(colorized) {

  var buttons = document.querySelectorAll(".colorizable img");

  for (var i = 0; i < buttons.length; i++) {
    var buttonImg = buttons[i];

    
    var currentSrc = buttonImg.src;
    
    var currentFilename = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    var currentPath = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1);

    
    if (currentFilename.indexOf("Colorized") === -1 && colorized) {
      
      buttonImg.src = currentPath + currentFilename.replace(".png", "Colorized.png");
    } else if (currentFilename.indexOf("Colorized") !== -1 && !colorized) {

      buttonImg.src = currentPath + currentFilename.replace("Colorized.png", ".png");
    }
  }


  localStorage.setItem("colorizedButtons", colorized);
}


function checkPreviousChoice() {
  var colorized = localStorage.getItem("colorizedButtons");
  if (colorized !== null) {
    changeImages(colorized === "true");
  }
}

window.onload = checkPreviousChoice;

function Minigame() {
  window.open("https://mega.nz/file/135xDIYK#bx9IPx_lXat2ROUNrA2zMPxHCM8D8Jow_-RAYzRnXi4");
}
function Signature() {
  window.open("https://h3nr1qu3x.github.io/mnrprofileprototype/");
}

