//






//////SIGNUP///////

var btn = document.querySelector(".btn");
var nameSignUp = document.querySelector(".name");
var emailSignUp = document.querySelector(".email-su");
var passwordSignUp = document.querySelector(".password-su");
var alertSignUp = document.querySelector(".alert-su")
var alertSuccess = document.querySelector(".success-su")
var alertEmail = document.querySelector(".email-alert")
var accounts = [];
var  accounts = JSON.parse(localStorage.getItem("accounts"));

//////SIGNUP WORKS START////////



function validation() {
  var mailformat = /^[a-zA-Z0-9]{4,20}[@][a-zA-Z]{3,8}(.com)/gm;
  var nameformat = /^[a-zA-Z]{3,18}/gm;
  var passformat = /^[a-zA-Z0-9]{6,}/gm;
  if (mailformat.test(emailSignUp.value) && nameformat.test(nameSignUp.value) && passformat.test(passwordSignUp.value)){
    
    return true
  }
  return false
}

///
///
var test = true


function tryIt() {
  

  for (var i = 0 ; i < accounts.length ; i++){
 if (accounts[i].emailSign === (emailSignUp.value)){
 
 
 test = false
 alertEmail.classList.replace("d-none" , "d-block")
 break;
 }
  test = true
 
 }
}   
///

function sign() {

  if (validation() == true && test == true){
    var signUp = {
      name: nameSignUp.value,
      emailSign: emailSignUp.value,
      pass: passwordSignUp.value,
    }
    alertSignUp.classList.replace( "d-block" ,"d-none")
    alertSuccess.classList.replace("d-none" , "d-block")
     alertEmail.classList.replace( "d-block" ,"d-none")
    accounts.push(signUp);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log(accounts);
  }
  else if (test == false) {
 alertSignUp.classList.replace( "d-block" ,"d-none")
    alertSuccess.classList.replace( "d-block" ,"d-none")
  }
  else {
    alertSignUp.classList.replace("d-none" , "d-block")
    alertSuccess.classList.replace( "d-block" ,"d-none")
    
  }
}

//
//


btn.addEventListener("click", function () {

  tryIt()
  sign();

});


////////////////
