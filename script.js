let loginBtn = document.querySelector("#login-btn");
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");


function validate() {
    if (user.value === "kodav" || pass.value === "david") {
        alert("login Succesful");
        return true;
    } else {
        alert("login failed! Please write the correct login details.");
        return false;
    }
}



























// const error = document.querySelector(".para");
// let p = document.createElement("p");
// error.append(p);
// p.textContent = "Name cannot be empty";
