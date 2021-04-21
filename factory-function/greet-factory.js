function greetName(){

    var greetMessage = "";
    var errorMessageName = "Oops, you have not enetered a name"
    var errormessageLan = "Oops you have not selected a language"
    var errorMessageSameName = "You have already entered this name"
    var la = "Salve, "
    var tur = "Merhaba, "
    var ital = "Ciao, "
    var greetCount = 0
    var namesGreeted = {}
    var userName = ""

    
    //var checkedRadio = document.querySelector("input[name='radio-btn']:checked");
    //JSON.stringify(namesGreeted)
   // namesGreeted[name] = 1
    //console.log(namesGreeted)

    function getUserName(names){
        var newName = names.trim()
        userName = newName
    }

    function greet(radioCheck){
        
            if (namesGreeted[userName] === undefined){
                if(radioCheck == "latin"){
                    greetMessage = la + userName
                    namesGreeted[userName] = 1;
                    greetCount++;
                }
                if(radioCheck == "turkish"){
                    greetMessage = tur + userName
                    namesGreeted[userName] = 1;
                    greetCount++;
                }
                if(radioCheck == "italian"){
                    greetMessage = ital + userName
                    namesGreeted[userName] = 1;
                    greetCount++;
                }
            
            }
            
        
        nameInput.value = ""

    }
    console.log(greetMessage)

    function errorMessRadio(radioCheck){
        if(!radioCheck){
            return errormessageLan;
        }
        // if(userName == ""){
        //     return errorMessageName;
        // }

    } 

    function errorMessName(userName){
        if(userName == ""){
            return errorMessageName;
        }
    }
    
    
    function values(){
        return{
            theUser : userName,
            greets : greetCount,
            italian : ital,
            latin : la,
            turkish : tur,
            messageGreet : greetMessage,
        }
    }

    return{
        greet,
        errorMessRadio,
        values,
        getUserName,
        errorMessName,
    }

    

}