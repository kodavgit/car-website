let loginBtn = document.querySelector("#login-btn");
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");


function validate() {
    if (user.value === "kodav" && pass.value === "david") {
        return true;
    } else {
        alert("login failed! Please write the correct login details.");
        return false;
    }
}




// hamburger section
const hamburger = document.querySelector(".open-menu")
const hamburgerIcon = document.querySelector(".open-menu i")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", ()=>{
  navbar.classList.toggle("open-nav-menu")
  const isOpen = navbar.classList.contains("open-nav-menu")

  hamburgerIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
})























// const error = document.querySelector(".para");
// let p = document.createElement("p");
// error.append(p);
// p.textContent = "Name cannot be empty";
