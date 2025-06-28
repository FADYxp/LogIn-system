var  accounts = JSON.parse(localStorage.getItem("accounts"));
var user = JSON.parse(localStorage.getItem("user"));
var loginBtn = document.querySelector(".login-btn");
function welcome(){
document.querySelector("h1").innerHTML = "welcome, " + user
}
console.log(user);

if (user) {

welcome()

}
else {

}
loginBtn.addEventListener("click" , function(){

window.location.href = "index.html" ;

})

console.log(
accounts
);
