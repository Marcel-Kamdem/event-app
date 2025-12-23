
//Components definitions

//Toggle button
/*
* Bouton de switch entre le mode sombre et le mode claire
**/ 
class TOGButtun extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="toggle-btn">
            <input type="checkbox" id="check" checked>
            <label for="check" class="btn"></label>
        </div>
        `
    }
}
customElements.define("tog-buttun", TOGButtun);

//Fonctionnalite du toggle buttun
let toggle_btn = document.getElementById("check");
let body = document.querySelector("body");

toggle_btn.addEventListener("click", () => {
    if (toggle_btn.checked) {
        body.classList.remove("dark");
        body.classList.add("light");
    }else{
         body.classList.remove("light");
         body.classList.add("dark");
    }
});

//Component Nav-bar
class TNav extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav-bar">
            <div class="logo"><a href="#">Horairo</a></div>
            <div class="nav-link">
                <a href="#" class="login">
                    <div class="bouton">login</div>
                </a>
                <a href="#" class="signUp">
                    <div class="bouton">sign up</div>
                </a>
            </div>
        </nav>
        `
    }
}
customElements.define("t-nav", TNav)

//creation du caroussel
const caroussel = document.querySelector(".caroussel");
const caroussel_state1 = document.querySelector(".pictureSelected .state1");
const caroussel_state2 = document.querySelector(".pictureSelected .state2");
const caroussel_state3 = document.querySelector(".pictureSelected .state3");
const caroussel_state4 = document.querySelector(".pictureSelected .state4");
const caroussel_state5 = document.querySelector(".pictureSelected .state5");
const caroussel_state6 = document.querySelector(".pictureSelected .state6");

const caroussel_selected = [
    caroussel_state1,
    caroussel_state2,
    caroussel_state3,
    caroussel_state4,
    caroussel_state5,
    caroussel_state6
];
const imagesCaroussel = [
    "https://placehold.co/1152x498/000000/FFF",
    "https://placehold.co/1152x498/00f045/FFF",
    "https://placehold.co/1152x498/f0f0f0/FFF",
    "https://placehold.co/1152x498/00d0d0/FFF",
    "https://placehold.co/1152x498/0af025/FFF",
    "https://placehold.co/1152x498/f1f1f1/FFF"
]
let index = 0;

setInterval(() => {
    index ++;

    if (index >= imagesCaroussel.length) {
        caroussel_selected[index - 1 ].classList.remove("selected");
        index = 0;
    }
    caroussel.setAttribute("src", imagesCaroussel[index]);
    caroussel_selected[index].classList.add("selected");
    caroussel_selected[index-1].classList.remove("selected");
    
}, 3000);
