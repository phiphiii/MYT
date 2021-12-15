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
function textpostionHor(){
    var text = document.getElementById("maintextdiv")
    const rbs = document.querySelectorAll('input[name="textpostionHor"]');
    let selectedValue;
    for(const rb of rbs){
        if(rb.checked){
            selectedValue = rb.value
            break;
        }
    }
    if(selectedValue==1){
        text.style.textAlign = "left";
    }
    if(selectedValue==2){
        text.style.textAlign = "center";
    }
    if(selectedValue==3){
        text.style.textAlign = "right";
    }
}
function textpostionVer(){
    var fontsize = document.getElementById("fontSizeChange").value;
    var text = document.getElementById("coffebreath");
    var nienawidzezycia = 690-fontsize;
    
    const rbs2 = document.querySelectorAll('input[name="textpostionVer"]');
    let selectedValue;
    for(const rb2 of rbs2){
        if(rb2.checked){
            selectedValue = rb2.value
            break;
        }
    }
    if(selectedValue==1){
        text.style.paddingTop = "0px";
    }
    if(selectedValue==2){
        text.style.paddingTop = nienawidzezycia+"px";
    }
}
function udpdateFontSize(){
    var fontsize = document.getElementById("fontSizeChange").value;
    if(fontsize<690){
        document.getElementById("hotrod").style.fontSize = fontsize+"px";
        
    }
    else{
        alert("Font size too big!");
    }
    
}
function udpdateBgColor(){
    var bgcolor = document.getElementById("bgColor").value;
    document.getElementById("maintextdiv").style.backgroundColor = bgcolor;
}
function udpdateTxtColor(){
    var txtcolor = document.getElementById("txtColor").value;
    document.getElementById("hotrod").style.color = txtcolor;
}
function visibility(){
    var textvisibility = document.getElementById("textvisibility");
    if(textvisibility.checked==false){
        document.getElementById("hotrod").style.visibility = "hidden";
        /*alert("chodzi o to że nie mam dziewczyny"); */
    }
    else{
        document.getElementById("hotrod").style.visibility = "visible";
    }
}
function changeBackground() {
    var input = document.getElementById("background").value;
    localStorage.setItem("Background", input);
    var result = localStorage.getItem("Background");
    $('.main_text').css({ 'background-image': "url(" + result + ")" });
}