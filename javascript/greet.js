var nameInput = document.querySelector(".textName")
var radioInput = document.querySelector(".radio-btn")
var greetButton = document.querySelector(".greet")
var clearButton = document.querySelector(".clear")
var messageDisplay = document.querySelector(".outputMessage")
var greetMessage = "";
var errorMessageName = "Oops, you have not enetered a name"
var errormessageLan = "Oops you have not selected a language"
var errorMessageSameName = "You have already entered this name"
var nameText = nameInput.querySelector(".textName")
var counterDis = document.querySelector(".counterValue")
var error = document.querySelector(".errorOutputMessage")
var checkedRadio1 = document.querySelector("input[name='language']:checked");
checkedRadio1.checked = false

var factory = greetName()

function greetings(){
    var checkedRadio = document.querySelector("input[name='language']:checked");
    
    //console.log(checkedRadio.value)
    factory.getUserName(nameInput.value);
    console.log(factory.values().theUser)
    console.log(factory.values().greets)
    if(checkedRadio && nameInput.value != ""){
        factory.greet(checkedRadio.value)
        counterDis.innerHTML = factory.values().greets
        messageDisplay.innerHTML = factory.values().messageGreet
        checkedRadio.checked = false; 
    }
    else {
        if(!checkedRadio){
            messageDisplay.innerHTML = factory.errorMessRadio()
        }
        if(nameInput.value == ""){
            messageDisplay.innerHTML = factory.errorMessName()
        }

        // messageDisplay.innerHTML = factory.errorMessRadio()
    }   
    
    //console.log()

}
greetButton.addEventListener("click",greetings )

