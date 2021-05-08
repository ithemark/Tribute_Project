let viewPortheight = window.innerHeight;

let browserHeight = window.outerHeight;

let screenHeight = screen.height;

let availHeight = screen.availHeight;

let height = availHeight-(browserHeight-viewPortheight);

window.onload = function testing(){
    document.getElementById("header2").style.marginTop = height+"px";
    document.getElementById("circleDiv2").style.marginTop = (height+240)+"px";
    document.getElementById("nameDiv2").style.marginTop = (height+440)+"px";
    document.getElementById("designationDiv2").style.marginTop = (height+550)+"px";
    document.getElementById("lifeSpanDiv2").style.marginTop = (height+640)+"px";
}