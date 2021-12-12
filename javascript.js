function dropShadow(){
    var dropshadow = document.getElementById("dropshadow");
    var text = document.getElementById("hotrod");
    if(dropshadow.checked == true){
        text.classList.add("drop_shadow");
    }
    else{
        text.classList.remove("drop_shadow");
    }
}
function textoutline(){
    var textoutline = document.getElementById("textoutline");
    var text = document.getElementById("hotrod");
    if(textoutline.checked == true){
        text.classList.add("textoutline");
    }
    else{
        text.classList.remove("textoutline");
    }
}
function udpdateFontSize(){
    var fontsize = document.getElementById("fontSizeChange").value;
    document.getElementById("hotrod").style.fontSize = ""+fontsize+"px";
}
