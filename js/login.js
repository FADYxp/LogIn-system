
////LOGIN start//////

var email = document.querySelector(".email");
var password = document.querySelector(".password");
var loginBtn = document.querySelector(".login-btn");
var incorrectAlert = document.querySelector(".incorrect-alert");
var  accounts = JSON.parse(localStorage.getItem("accounts"));
var test = false

 


function logIn(){
  for (var i = 0 ; i < accounts.length ; i++){
 if (accounts[i].emailSign === (email.value) && accounts[i].pass === (password.value) ){
 
 
 test = true
 var userName = localStorage.setItem("user", JSON.stringify(accounts[i].name));
 break;
 }
  test = false
 
 }
 ///
if (test == true){

  console.log("hello");
incorrectAlert.classList.replace("d-block" , "d-none")
window.location.href = "welcome.html" ;
  
}
else{
incorrectAlert.classList.replace("d-none" , "d-block")
}

}

loginBtn.addEventListener("click" , function(){
// tryIt()
logIn()

})



