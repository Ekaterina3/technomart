var link = document.querySelector(".write-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");    
})

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");  
  
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});


var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});


var confirmLink = document.querySelector(".btn-buy");  /*Когда пишу querySelectorAll,скрипт перестает работатьб а консоль пишет, что confirmLink.addEventListener не функция.*/
var confirmPopup = document.querySelector(".buying-confirm");
var confirmClose = confirmPopup.querySelector(".modal-content-close");

confirmLink.addEventListener("click", function(event) {
  event.preventDefault();
  confirmPopup.classList.add("modal-content-show");    
})

confirmClose.addEventListener("click", function(event) {
  event.preventDefault();
  confirmPopup.classList.remove("modal-content-show");   

});