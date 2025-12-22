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
