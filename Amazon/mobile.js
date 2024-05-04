dropmenu = document.getElementsByClassName("dropdown-menu");
dropdown = document.getElementsByClassName("nav-link");

let coord = dropdown[0].getBoundingClientRect();

// Mover el segundo elemento 100 píxeles más hacia abajo
let desplazamientoVertical = 100;
coord.top = coord.top + desplazamientoVertical;

drop = dropmenu[0];
drop.style.position = "absolute";
drop.style.top = coord.top + "px";
drop.style.left = coord.left + "px";

console.log(coord);
