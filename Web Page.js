let viewPortheight = window.innerHeight;

let browserHeight = window.outerHeight;

let screenHeight = screen.height;

let availHeight = screen.availHeight;

let height = availHeight-(browserHeight-viewPortheight);

window.onload = function pageHeight(){

    //fixing page height
    document.getElementById("page1").style.height = height+"px";
    document.getElementById("page2").style.marginTop = (height)+"px";
    document.getElementById("page2").style.height = (height)+"px";

    //calculating header size
    document.getElementById("header1").style.height = Math.max(height*(0.272))+"px";
    document.getElementById("header2").style.height = Math.max(height*(0.272))+"px";

    //calculating positioning of div for circle
    document.getElementById("circleDiv1").style.height = Math.max(height*(0.181))+"px";
    document.getElementById("circleDiv1").style.marginTop = Math.max(height*(0.218))+"px";
    document.getElementById("circleDiv2").style.height = Math.max(height*(0.181))+"px";
    document.getElementById("circleDiv2").style.marginTop = Math.max(height*(0.218))+"px";

    //calculating width of outer-circle
    document.getElementById("circle1").style.width = Math.max(height*(0.181))+"px";
    document.getElementById("circle2").style.width = Math.max(height*(0.181))+"px";

    //calculating image position within circle
    document.getElementById("circle1").getElementsByTagName("img")[0].style.height = Math.max((height*(0.181)*0.9))+"px";
    document.getElementById("circle1").getElementsByTagName("img")[0].style.width = Math.max((height*(0.181)*0.9))+"px";
    document.getElementById("circle2").getElementsByTagName("img")[0].style.height = Math.max((height*(0.181)*0.9))+"px";
    document.getElementById("circle2").getElementsByTagName("img")[0].style.width = Math.max((height*(0.181)*0.9))+"px";

    //calculating size of div for name
    document.getElementById("nameDiv1").style.marginTop = Math.max(height*(0.454))+"px";
    document.getElementById("nameDiv2").style.marginTop = Math.max(height*(0.454))+"px";

    //calculating size of div for designation
    document.getElementById("designationDiv1").style.marginTop = Math.max(height*(0.636))+"px";
    document.getElementById("designationDiv2").style.marginTop = Math.max(height*(0.636))+"px";

    //calculating size of div for life span
    document.getElementById("lifeSpanDiv1").style.marginTop = Math.max(height*(0.818))+"px";
    document.getElementById("lifeSpanDiv2").style.marginTop = Math.max(height*(0.818))+"px";

    //changing opacity
    document.getElementById("page1").style.opacity = 1;
    document.getElementById("page1").style.transition = "all 2s";
    document.getElementById("page2").style.opacity = 1;
    document.getElementById("page2").style.transition = "all 2s";
}