function juego(){
    if(document.getElementById("col1").value==document.getElementById("col2").value && document.getElementById("col1").value==document.getElementById("col3").value && document.getElementById("col1").value!=""){
        if(document.getElementById("col1").value==document.getElementById("col2").value && document.getElementById("col2").value=="x" || document.getElementById("col2").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col4").value==document.getElementById("col5").value && document.getElementById("col4").value==document.getElementById("col6").value  &&document.getElementById("col4").value!=""){
        if(document.getElementById("col4").value==document.getElementById("col5").value && document.getElementById("col5").value=="x" || document.getElementById("col5").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col7").value==document.getElementById("col8").value && document.getElementById("col7").value==document.getElementById("col9").value && document.getElementById("col7").value!=""){
        if(document.getElementById("col7").value==document.getElementById("col8").value && document.getElementById("col8").value=="x" || document.getElementById("col8").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col1").value==document.getElementById("col4").value && document.getElementById("col1").value==document.getElementById("col7").value && document.getElementById("col1").value!=""){
        if(document.getElementById("col1").value==document.getElementById("col4").value && document.getElementById("col4").value=="x" || document.getElementById("col4").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col2").value==document.getElementById("col5").value && document.getElementById("col2").value==document.getElementById("col8").value && document.getElementById("col2").value!=""){
        if(document.getElementById("col2").value==document.getElementById("col5").value && document.getElementById("col5").value=="x" || document.getElementById("col5").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col3").value==document.getElementById("col6").value && document.getElementById("col3").value==document.getElementById("col9").value && document.getElementById("col3").value!=""){
        if(document.getElementById("col3").value==document.getElementById("col6").value && document.getElementById("col6").value=="x" || document.getElementById("col6").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col1").value==document.getElementById("col5").value && document.getElementById("col1").value==document.getElementById("col9").value && document.getElementById("col1").value!=""){
        if(document.getElementById("col1").value==document.getElementById("col5").value && document.getElementById("col5").value=="x" || document.getElementById("col5").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
    if(document.getElementById("col3").value==document.getElementById("col5").value && document.getElementById("col3").value==document.getElementById("col7").value && document.getElementById("col3").value!=""){
        if(document.getElementById("col3").value==document.getElementById("col5").value && document.getElementById("col5").value=="x" || document.getElementById("col5").value=="o")
        document.getElementById("ganaste").innerHTML="Ganaste!!!";
    }
}
