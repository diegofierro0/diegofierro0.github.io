dropmenu = document.getElementsByClassName("dropdown-menu");
dropdown = document.getElementsByClassName("nav-link");
cos=document.getElementById("image");
let coord = dropdown[0].getBoundingClientRect();

coord.top = coord.top + 100;

drop = dropmenu[0];
drop.style.position = "absolute";
drop.style.top = coord.top + "px";
drop.style.left = coord.left + "px";

window.onscroll = function() { getSmaller(); };

function getSmaller(){
    if(window.pageYOffset>1){
        cos.classList.add("small");
    }
    else{
        cos.classList.remove("small");
    }
}