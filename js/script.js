var overlay = document.querySelector(".modal-content");
var confirmLink = document.querySelectorAll(".btn-buy");
var confirmPopup = document.querySelector(".modal-buying-confirm");
var confirmClose = confirmPopup.querySelector(".modal-content-close");


for (var i = 0; i < confirmLink.length; i++) {
  confirmLink[i].addEventListener("click", function(event) {
    event.preventDefault();
    confirmPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-show");
  
});
}

confirmClose.addEventListener("click", function(event) {
  event.preventDefault();
  confirmPopup.classList.remove("modal-content-show");  
   overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (confirmPopup.classList.contains("modal-content-show")) {
      confirmPopup.classList.remove("modal-content-show");
       overlay.classList.remove("modal-show");
    }
  }
});


var link = document.querySelector(".write-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show"); 
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-show");
    }
  }
});


var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
   overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
       overlay.classList.remove("modal-show");
    }
  }
});

