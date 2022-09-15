let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3700)

function nextImage(){
    count++;
    if(count>4){
       count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

let count1 = 11;
document.getElementById("radio11").checked = true;

setInterval( function(){
    nextImage2();
}, 3000)

function nextImage2(){
    count1++;
    if(count1>26){
       count1 = 11;
    }

    document.getElementById("radio"+count1).checked = true;
}



const btn = document.getElementById("btnTop")

btn.addEventListener("click", function() {
    // window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()

let anchorSelector = 'a[href^="#"]';

let anchorList =
    document.querySelectorAll(anchorSelector);

anchorList.forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        let destination =
            document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});


// ini mod

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});