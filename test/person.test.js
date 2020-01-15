const chai = require('chai')
const expect = chai.expect

// Your Person test goes here!
const Person = require("../models/person.js")

describe("Person", function(){
    it("should initialize properly", function(){
        var person = new Person("Mari", "Stoiovici", "15 June 1985")

        expect(person.firstName).to.equal("Mari")
        expect(person.surname).to.equal("Stoiovici")
        expect(person.dob).to.equal("15 June 1985")
    })

})