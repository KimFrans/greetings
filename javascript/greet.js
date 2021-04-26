var nameInput = document.querySelector(".textName")
var radioInput = document.querySelector(".radio-btn")
var greetButton = document.querySelector(".greet")
var clearButton = document.querySelector(".clear")
var messageDisplay = document.querySelector(".outputMessage")
// var greetMessage = "";
// var errorMessageName = "Oops, you have not enetered a name"
// var errormessageLan = "Oops you have not selected a language"
// var errorMessageSameName = "You have already entered this name"
var nameText = nameInput.querySelector(".textName")
var counterDis = document.querySelector(".counterValue")
var error = document.querySelector(".errorOutputMessage")
var checkedRadio1 = document.querySelector("input[name='language']:checked");
checkedRadio1.checked = false

var factory = greetName()


factory.greetLo(Number(localStorage['counterForGreet']))
if (localStorage['namesGreetedObject']){
    factory.nameObs(JSON.parse(localStorage['namesGreetedObject']))
}

counterDis.innerHTML = Object.keys(factory.values().nameObject).length


function greetings(){

    var checkedRadio = document.querySelector("input[name='language']:checked");
    
    //console.log(checkedRadio.value)
    factory.getUserName(nameInput.value);
    
    
    if(checkedRadio && nameInput.value != ""){
        factory.greet(checkedRadio.value)
        error.innerHTML = ""
        messageDisplay.innerHTML = factory.values().messageGreet
        checkedRadio.checked = false; 
        console.log(factory.values().nameObject)
        
        error.innerHTML = factory.values().sameName
       // error.innerHTML = factory.errorMessName()
        setTimeout(function(){ messageDisplay.innerHTML = "" }, 2000);
        setTimeout(function(){ error.innerHTML = "" }, 2000);

    }
    
    
    else {
        if(!checkedRadio){
            error.innerHTML = factory.errorMessRadio()
        }
        if(nameInput.value == ""){
            error.innerHTML = factory.errorMessName()
        }
        //setTimeout(function(){ error.innerHTML = "" }, 2000);
        if(!nameInput.value.match("^[a-zA-Z]*$")){
            error.innerHTML = factory.values().sameName
        }
        setTimeout(function(){ error.innerHTML = "" }, 2000);
    }   
    counterDis.innerHTML = factory.values().greets;
    counterDis.innerHTML = Object.keys(factory.values().nameObject).length
    console.log(factory.values().greets);
    console.log(factory.values().theUser)
    //error.innerHTML = factory.values().sameName
    nameInput.value = ""
    //console.log()
    //factory.setLocalStorage()
    localStorage.setItem('namesGreetedObject', JSON.stringify(factory.values().nameObject))
    localStorage['counterForGreet'] = factory.values().greets

}
//factory.retriveLocalStorage()


// if(counterDis.innerHTML == undefined){
//     counterDis.innerHTML = factory.setLocalStorage()
// }
// if(factory.values().nameObject == undefined || factory.values().nameObject == undefined){
//     counterDis.innerHTML = 0
// }
// else{
    // counterDis.innerHTML = factory.values().nameObject
    //console.log(factory.retriveLocalStorage())
    // counterDis.innerHTML = Object.keys(factory.values().nameObject).length
    //console.log("second" + factory.setLocalStorage())
// }

greetButton.addEventListener("click",greetings )


function clearCount(){
    factory.clearTheCountButton()
    counterDis.innerHTML = 0
}
clearButton.addEventListener("click", clearCount)