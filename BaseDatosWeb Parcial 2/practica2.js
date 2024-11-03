document.getElementById("boton").addEventListener("click", function(){
    let n = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if(n==1){
        document.getElementById("imag").src="imag/1.jpg"
    }
    if(n==2){
        document.getElementById("imag").src="imag/2.png"
    }
    if(n==3){
        document.getElementById("imag").src="imag/3.png"
    }
    if(n==4){
        document.getElementById("imag").src="imag/4.png"
    }
    if(n==5){
        document.getElementById("imag").src="imag/5.webp"
    }
    if(n==6){
        document.getElementById("imag").src="imag/6.jpeg"
    }
});