function register(){

  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var x = document.getElementById("passEntered").value;
  document.getElementById("passwordGroup").innerHTML = "You wrote: " + x;
  var y = document.getElementById("userEntered").value;
  document.getElementById("usernameGroup").innerHTML = "You wrote: " + y;

}
function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if (userEntered.length <6) {

    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }else if (userEntered = " ") {

    document.getElementById("usernameError").innerHTML="Username cannot contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }else{
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }

}
function validatePassword(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(passEntered = 'password')
  {
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }else if(passEntered.length < 6)
  {
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }else if(passEntered.length>20)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be more than 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }else if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be the same as the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
