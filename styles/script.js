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