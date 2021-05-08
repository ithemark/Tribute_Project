let viewPortheight = window.innerHeight;

let browserHeight = window.outerHeight;

let screenHeight = screen.height;

let availHeight = screen.availHeight;

let height = availHeight-(browserHeight-viewPortheight);

window.onload = function pageHeight(){
    document.getElementById("page1").style.height = height+"px";
    document.getElementById("page2").style.marginTop = (height)+"px";
    document.getElementById("page2").style.height = (height)+"px";
    document.getElementById("header1").style.height = Math.max(height*(0.272))+"px";
    document.getElementById("header2").style.height = Math.max(height*(0.272))+"px";
    document.getElementById("circleDiv1").style.height = Math.max(height*(0.181))+"px";
    document.getElementById("circleDiv1").style.marginTop = Math.max(height*(0.218))+"px";
    document.getElementById("circleDiv2").style.height = Math.max(height*(0.181))+"px";
    document.getElementById("circleDiv2").style.marginTop = Math.max(height*(0.218))+"px";
    document.getElementById("circle1").style.width = Math.max(height*(0.181))+"px";
    document.getElementById("circle2").style.width = Math.max(height*(0.181))+"px";
    document.getElementById("nameDiv1").style.marginTop = Math.max(height*(0.454))+"px";
    document.getElementById("nameDiv2").style.marginTop = Math.max(height*(0.454))+"px";
    document.getElementById("designationDiv1").style.marginTop = Math.max(height*(0.636))+"px";
    document.getElementById("designationDiv2").style.marginTop = Math.max(height*(0.636))+"px";
    document.getElementById("lifeSpanDiv1").style.marginTop = Math.max(height*(0.818))+"px";
    document.getElementById("lifeSpanDiv2").style.marginTop = Math.max(height*(0.818))+"px";
}