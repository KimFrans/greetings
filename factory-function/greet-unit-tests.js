describe('greeting', function(){
    it('Should be able to greet a person' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet("latin")

        assert.equal("Salve, Kim", greetTest.values().messageGreet)

    });

    it('Should not greet the same person twice' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet("latin")
        greetTest.getUserName("Kim")
        greetTest.greet("latin")

        assert.equal("You have already entered this name", greetTest.values().sameName)

    });

    it('Should display all the names greeted' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet("latin")
        greetTest.getUserName("Kelly")
        greetTest.greet("italian")
        greetTest.getUserName("qwerty")
        greetTest.greet("turkish")

        assert.deepEqual({ Kim: 0, Kelly: 0, Qwerty: 0 }, greetTest.values().nameObject)

    });

    it('Should increase the counter' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet("latin")
        greetTest.getUserName("Kelly")
        greetTest.greet("italian")
        greetTest.getUserName("qwerty")
        greetTest.greet("turkish")

        assert.deepEqual(3, greetTest.values().greets)

    });



});

describe('error messages', function(){
    it('Should display error messsage when no name has been entered' , function(){
        var greetTest = greetName();

        greetTest.getUserName("")
        greetTest.greet("latin")

        assert.equal("Oops, you have not enetered a name", greetTest.errorMessName())

    });

    it('Should display error messsage when no language has been selected' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet()

        assert.equal("Oops you have not selected a language", greetTest.errorMessRadio())

    });

    it('Should display error messsage when no name has been entered and no language has been selected' , function(){
        var greetTest = greetName();

        greetTest.getUserName("")
        greetTest.greet()

        assert.equal("Please enter name and select language", greetTest.noValues())

    });

    it('Should display error messsage when the same name has been entered' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim")
        greetTest.greet("latin")
        greetTest.getUserName("Kim")
        greetTest.greet("turkish")

        assert.equal("You have already entered this name", greetTest.values().sameName)

    });

    it('Should display error messsage when the name entered contains special characters or numbers' , function(){
        var greetTest = greetName();

        greetTest.getUserName("kim123")
        greetTest.greet("latin")

        assert.equal("Oh no, invalid name entered!", greetTest.values().sameName)

    });



});