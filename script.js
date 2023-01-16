let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let homeContent = document.querySelector(".home_content");
let loader = document.querySelector(".loader");

// let readMoreMicroservices = document.getElementById("expand-microservices");
// let sectionMicroservices = document.getElementById("microservices");

// readMoreMicroservices.onclick = function() {
//     sectionMicroservices.classList.toggle("read-more");

//     if(readMoreMicroservices.textContent.includes("More")) {
//         readMoreMicroservices.textContent = readMoreMicroservices.textContent.replace("More", "Less");
//     } else {
//         readMoreMicroservices.textContent = readMoreMicroservices.textContent.replace("Less", "More");
//     }
    
// };


let searchBtn = document.querySelector(".bx-search");

const arrow = document.querySelector("#arrowButton");
const toggler = document.querySelectorAll(".toggler");        
const togglerTarget = document.querySelector(".toggler-target");       
const extendable = document.querySelector(".extendable");
const overlay = document.querySelectorAll(".image-overlay");

window.addEventListener("load", () => {            
    sidebar.classList.remove("invisible");
    homeContent.classList.remove("invisible");

    loader.classList.add("loader--hidden");           
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

//controls sidebar
btn.onclick = function () {
    sidebar.classList.toggle("active");
    if(!sidebar.classList.contains("active")) {       
        //if sidebar is closed, closes extendable LI, deactive list itens and set arrow to default        
        extendable.classList.remove("active");
        togglerTarget.classList.remove("active");
        arrow.classList.remove("bx-rotate-90");
    }
}

//click on lupa
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

//click on "My Experience"
toggler.forEach(tog => {
    tog.addEventListener('click', () => {
        extendable.classList.toggle("active")                               
        togglerTarget.classList.toggle("active");
        arrow.classList.toggle("bx-rotate-90");                
    })
});

//click on tech skills cards
//could be done using overlay.forEach.onClick
// for(var i=0; i<overlay.length; i++) {
//     overlay[i].onclick = function() {
//         this.classList.toggle("image-overlay-active");
//     }
// }