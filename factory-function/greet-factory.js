function greetName(){

    var greetMessage = "";
    var errorMessageName = "Oops, you have not enetered a name"
    var errormessageLan = "Oops you have not selected a language"
    var errorMessageSameName = ""
    var la = "Salve, "
    var tur = "Merhaba, "
    var ital = "Ciao, "
    var greetCount = 0
    var namesGreeted = {}
    var userName = ""

    // localStorage.setItem(namesGreeted , JSON.stringify(namesGreeted))
    // localStorage.setItem(greetCount)
    
    // var retrieve = localStorage.getItem()
    // console.log(retrieve , JSON.parse(retrieve))
    
    //var checkedRadio = document.querySelector("input[name='radio-btn']:checked");
    //JSON.stringify(namesGreeted)
   // namesGreeted[name] = 1
    //console.log(namesGreeted)

    function getUserName(names){
        var newName = names.trim();
        userName = newName
    }

    function greet(radioCheck){


        if (namesGreeted.hasOwnProperty(userName)){
            namesGreeted[userName] ++;

            nameOb()
            
           if(radioCheck == "latin"){
                greetMessage = la + userName
            }
            if(radioCheck == "turkish"){
                greetMessage = tur + userName
            }
            if(radioCheck == "italian"){
                greetMessage = ital + userName
            }
        }
            if (namesGreeted[userName] === undefined){
                errorMessageSameName = ''
                if(userName.match("^[a-zA-Z]*$")){

                    if(radioCheck == "latin"){
                        greetMessage = la + userName
                        namesGreeted[userName] = 0;
                        greetCount++;
                    }
                    if(radioCheck == "turkish"){
                        greetMessage = tur + userName
                        namesGreeted[userName] = 0;
                        greetCount++;
                    }
                    if(radioCheck == "italian"){
                        greetMessage = ital + userName
                        namesGreeted[userName] = 0;
                        greetCount++;
                    }
                    
                }
                else if(!userName.match("^[a-zA-Z]*$")){
                    greetMessage = ""
                    errorMessageSameName = "Oh no, invalid name entered!"
                }
                
            
            }
        //    var retrieve = localStorage.getItem(namesGreeted)
        //    console.log(retrieve , JSON.parse(retrieve))
            
            
        

    }
    // console.log(greetMessage)

    function errorMessRadio(){
        return errormessageLan
    }

    function nameOb(){
        if (namesGreeted.hasOwnProperty(userName)){
            return errorMessageSameName = "You have already entered this name"
        }
    }

    function errorMessName(){
        return errorMessageName
    }

    function greetedNames(){
        return namesGreeted
    }

    function values(){
        return{
            nameObject : namesGreeted,
            theUser : userName,
            greets : greetCount,
            italian : ital,
            latin : la,
            turkish : tur,
            messageGreet : greetMessage,
            sameName : errorMessageSameName
        } 
    }

    function clearTheCountButton(){
        greetCount = 0
        namesGreeted = {}
        localStorage.clear()
    }

    function setLocalStorage(){
        localStorage['namesGreetedObject'] = JSON.stringify(namesGreeted)
        localStorage['counterForGreet'] = greetCount
        // localStorage.setItem(namesGreeted , JSON.stringify(namesGreeted))
        // localStorage.setItem(greetCount , JSON.stringify(greetCount))
    }

    function retriveLocalStorage(){
        greetCount = Number(localStorage['counterForGreet'])
        namesGreeted = JSON.parse(localStorage['namesGreetedObject'])
        //namesGreeted = JSON.parse((localStorage['namesGreetedObject']));
        //console.log(retrieve , JSON.parse(retrieve))
    }

    return{
        greet,
        errorMessRadio,
        values,
        getUserName,
        errorMessName,
        clearTheCountButton,
        nameOb,
        greetedNames,
        setLocalStorage,
        retriveLocalStorage,
    }

    

}
