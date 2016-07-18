var menuLevel2 = document.querySelector(".menu-level-2");
var serviceMenu = document.getElementById("serviceMenu");

menuLevel2.classList.add("closed");

serviceMenu.addEventListener("click", function(event) {
  event.preventDefault();
  if (menuLevel2.classList.contains("closed")) {
    menuLevel2.classList.remove("closed");
  }
  else {
    menuLevel2.classList.add("closed");
  }
});


