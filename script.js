var carentImg = 1;
const MAX_IMG = 9;

window.onload = function (){
	var img = document.getElementById("gallery");
	img.setAttribute("src", "img/1.jpg");
	img.style.maxHeight = "480px";

	var elements = document.querySelectorAll('#menu ul li a');
	var oldColor = elements[0].style.backgroundColor;
	var newColor = "aqua";
	var flag = false;
	for (var i = 0; i < elements.length; i++) {
		elements[i].onmouseover = hoverMenu;		  
		elements[i].onmouseout = hoverMenu;
	}
    function hoverMenu(){
		if(!flag){
		  this.style.backgroundColor = newColor;
		}
		else{
		  this.style.backgroundColor = oldColor;			  
		}
		flag = !flag;
	}
}


function logIn() {
    "use strict";
    var login = document.getElementById("login");
    login.style.display = "block";
}
function registration() {
    "use strict";
    var login = document.getElementById("registration");
    login.style.display = "block";
}
function clickDiv(event) {
    "use strict";
	if(event.target.tagName == "DIV"){
		var login = document.getElementById("login");
		login.style.display = "none";
		var registration = document.getElementById("registration");
		registration.style.display = "none";
	}
}

function validateForm(){
    if(checkText("name") & checkText("surname") & checkText("city") & checkText("login") & checkText("password") & checkTel() & checkEmail())
        return true;
    else 
        return false;
}

function errInput(input){
    input.style.boxShadow = "0 0 3px red";
}
function noErrInput(input){
    input.style.boxShadow = null;
}

function checkText(type){
    var inputType = document.forms["registr"][type];    
    if(null == inputType.value || "" == inputType.value || undefined == inputType.value){
        errInput(inputType);
        return false;
    }
    return true;
}
function checkEmail(){
    var email = document.forms["registr"]["email"]; 
    if(checkText("email")){
        if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email.value)){
           return true;
        }
    }
    errInput(email);
    return false
}
function checkTel(){
    var tel = document.forms["registr"]["phone"];
    if(checkText("phone")){
        var b = /^((\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel.value);
        if(b){
           return true;
        }
    }
    errInput(tel);
    return false
}
function inputTextInput(){
    var input = document.forms["registr"]["name"];
    if(checkText("name"))
        noErrInput(input);        
}

function ago(){
    var img = document.getElementById("gallery");
    carentImg--;
    if(carentImg < 1) carentImg = MAX_IMG;
    img.setAttribute("src", "img/" + (carentImg) + ".jpg");
	deg = 0;
	turn();
}
function forward(){
    var img = document.getElementById("gallery");
    carentImg++;
    if(carentImg > MAX_IMG) carentImg = 1;
    img.setAttribute("src", "img/" + (carentImg) + ".jpg");
	deg = 0;
	turn();
}


function contextMenuImg(event){
    var menu = document.getElementById("context_menu");
	
	menu.style.top = event.clientY + "px";
	menu.style.left = event.clientX + "px";
    menu.style.display = "block";
	return false;
}
document.onclick = function(event){
    var menu = document.getElementById("context_menu");
    menu.style.display = "none";
}

var deg = 0;
function turn(){
	if(deg == 360 || deg == -360) deg = 0;
    var img = document.getElementById("gallery");
	
	var scale = "scale(1)";
	if(deg == 90 || deg == 270 || deg == -90 || deg == -270){
		scale = "scale(-0." + ((100 / img.width * img.height) | 0) + ")";
	}
	//700x500
	
	img.style.transform = 'rotate(' + deg + 'deg) ' + scale;
}
function turnToLeft(){
	deg -= 90;
	turn();
}
function turnToRight(){
	deg += 90;
	turn();
}
