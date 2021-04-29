describe('greeting', function(){
    it('Should be able to greet a person' , function(){
        var greetTest = greetName();
        greetTest.getUserName("kim")
        greetTest.greet()

        assert.equal("Salve,kim", greetTest.greet())

    });

    



});