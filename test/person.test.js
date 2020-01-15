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
        expect(person.emails).to.deep.equal([])
    })

    it("should capitalize first name", function(){
        var person = new Person("amy", "Something", "15 June 1985")

        expect(person.firstName).to.equal("Amy")
    })

    it("should return a full name", function(){
        var person = new Person("Amy", "Something", "15 June 1985")

        expect(person.fullName()).to.equal("Amy Something")
    })

    it("should accept new emails and add them to the array of emails", function(){
        var person = new Person("Teo", "Bloggs", "11 march 2000")

        person.addEmail("teo@example.com")
        person.addEmail("teo@workexample.com")

        expect(person.emails).to.deep.equal(["teo@example.com","teo@workexample.com"])
    })

    it("should accept new phone numbers and add them to the array of phone numbers", function(){
        var person = new Person("Teo", "Bloggs", "11 march 2000")

        person.addPhoneNumber("07340345676")

        expect(person.phoneNumbers).to.deep.equal(["07340345676"])
    })


})