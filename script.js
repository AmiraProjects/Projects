function changeText(){
    var replaceText = document.getElementsByClassName("mini-text"); 
    replaceText[0].innerHTML = "Scroll More to See"

    document.getElementById("icon-up").style.display="none";
    document.getElementById("icon-down").style.display="block";
}
function changeTextBack(){
    var replaceText = document.getElementsByClassName("mini-text"); 
    replaceText[0].innerHTML = "Learn Basic Programming Here!"

    document.getElementById("icon-down").style.display="none";
    document.getElementById("icon-up").style.display="block";
}

var btnLike = document.querySelector("#green")
var btnDislike = document.querySelector("#red")

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor(){
    if(btnDislike.classList.contains("red")){
        btnDislike.classList.remove("red")
    }
    this.classList.toggle("green")
}

function dislikeColor(){
    if(btnLike.classList.contains("green")){
        btnLike.classList.remove("green")
    }
    this.classList.toggle("red")
}

function changeImage(element){
    element.setAttribute("src", "assets/img-header2.png")
}

function changeImageBack(element){
    element.setAttribute("src", "assets/img-header.png")
}

function changeTitle(element){
    element.innerHTML="Improve Game & Website"
}

function changeTitleBack(element){
    element.innerHTML="Learn More About Programming Here!"
}

var close= document.querySelectorAll(".close");

for (let i = 0; i<close.length; i++){
    close[i].addEventListener("click", function(e){
        e.target.parentElement.style.display = "none";
        e.preventDefault()
    });
};

var myList= document.getElementsByTagName("li");
var i;
for(i = 0; i<myList.length; i++){
    var span = document.createElement("span");
    span.innerHTML = "x";
    myList[i].appendChild(span).setAttribute("class","close");
}

var close= document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

function newElement(){
    var li= document.createElement("li")
    var inputValue = document.getElementById("myInput").value

    if(inputValue === ""|| inputValue === ""){
        alert("Must Fill Data");
    }else{
        document.getElementById("myUl").appendChild(li).setAttribute("class", "search-tags-item");
        li.innerHTML = inputValue;
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span).setAttribute("class", "close");

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display="none"
        }
    }
}

var slides=document.querySelectorAll(".slide")
var buttons=document.querySelectorAll(".slider-btn")
let currentSlide = 1

var manualNav = function(manual){
    slides.forEach(function(slide){
        slide.classList.remove("active");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        })
    });

    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
}

buttons.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        manualNav(i);
        currentSlide=i;
    })
})

var repeat=function(activeClass){
    let active = document.getElementsByClassName("active");

    let i = 1
    var repeater = function(){
        setTimeout(function(){
            [...active].forEach(function(activeSlide){
                activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            buttons[i].classList.add("active");
            i++

            if(slides.length == i){
                i = 0
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        },5000)
    }
    repeater();
}
repeat();

var codingProjects = document.querySelectorAll(".project");
codingProjects.forEach((project, index) => {
    project.dataset.aos = "fade-down";
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index * 300;
})

AOS.init({
    once: true
});

var splash = document.querySelector(".splash");
if(splash){
    document.addEventListener("DOMContentLoaded", 
    function(event){
        setTimeout(function(){
            splash.style.display = "none"
        }, 3000);
    });
}

var animate = document.querySelector(".astronaut-takeoff");
if(animate){
    document.addEventListener("DOMContentLoaded", function(event){
        setTimeout(function(){
            animate.classList.add("animation")
        }, 400);
    });
}

var splashText = document.querySelector(".splash-text");
if(splashText){
    setTimeout(function(){
        splashText.innerHTML = "Let's Go!"
    }, 2000);
}