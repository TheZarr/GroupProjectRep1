function check(form){
    if(form.userid.value == "UN" && form.pswrd.value== "PW")
    {
        window.open("link site here")
    }
        else{
            alert ("The Username & Password you entered does not match")
    }
}

// Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoz7rPC6-gXk-jPyj9nRoe1uIoBL8r5_g",
    authDomain: "thezarrsproject.firebaseapp.com",
    databaseURL: "https://thezarrsproject.firebaseio.com",
    projectId: "thezarrsproject",
    storageBucket: "thezarrsproject.appspot.com",
    messagingSenderId: "689034750872"
  };

  firebase.initializeApp(config);


var userData = firebase.database().ref();
console.log(userData);

$("#regbutton").on("click", function(){
    event.preventDefault();
// Grabs user input
console.log($("#exampleInputName").val());
var nameInput = $("#exampleInputName").val();
var emailInput = $("#exampleInputEmail1").val();
var pwInput = $("#exampleInputPassword1").val();
console.log(nameInput);
console.log(emailInput);
console.log(pwInput);

// Creates local "temporary" object for holding train data

var newUser = {
    name: nameInput,
    email: emailInput,
    password: pwInput,
}
console.log(newUser);
userData.push(newUser);

// Clears all of the text-boxes
$("#exampleInputName").val("");
$("#exampleInputEmail1").val("");
$("#exampleInputPassword1").val("");

return false;
});