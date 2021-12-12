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
        text.classList.add("text_outline");
    }
    else{
        text.classList.remove("text_outline");
    }
}
function textcenter(){
    var textcenter = document.getElementById("textcenter");
    var text = document.getElementById("maintextdiv");
    if(textcenter.checked == true){
        text.classList.add("text_center");
    }
    else{
        text.classList.remove("text_center");
    }
}
function udpdateFontSize(){
    var fontsize = document.getElementById("fontSizeChange").value;
    document.getElementById("hotrod").style.fontSize = fontsize+"px";
}
function udpdateBgColor(){
    var bgcolor = document.getElementById("bgColor").value;
    document.getElementById("maintextdiv").style.backgroundColor = bgcolor;
}
function udpdateTxtColor(){
    var txtcolor = document.getElementById("txtColor").value;
    document.getElementById("hotrod").style.color = txtcolor;
}
