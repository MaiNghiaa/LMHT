var hoverNav_item = document.querySelectorAll(".nav__item");
var item__hover = document.querySelectorAll(".item__hover");
for (i = 0; i < hoverNav_item.length; i++) {
  hoverNav_item[i].addEventListener("mouseenter", function () {
    this.querySelectorAll(".item__hover")[0].style.visibility = "visible";
  });

  hoverNav_item[i].addEventListener("mouseleave", function () {
    this.querySelectorAll(".item__hover")[0].style.visibility = "hidden";
  });
}
