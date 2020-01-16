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

describe('#returnFormattedDetails', function() {
    it('includes the full name', function() {
      var person = new Person('Jon', 'Smith', "3 April 1998")
      var result = person.returnFormattedDetails()
      var lines = result.split('\n')
      expect(lines[0]).to.equal('Jon Smith')
    })

    it('includes a line of dots', function() {
    var person = new Person('Jon', 'Smith', "3 April 1998")
    var result = person.returnFormattedDetails()
    var lines = result.split('\n')
    expect(lines[1]).to.equal('---------')
    })

    it('includes dob', function() {
        var person = new Person('Jon', 'Smith', "3 April 1998")
        var result = person.returnFormattedDetails()
        var lines = result.split('\n')
        expect(lines[2]).to.equal('DOB: 3 April 1998')
        })

    it('includes empty line and email address title', function() {
        var person = new Person('Jon', 'Smith', "3 April 1998")
        var result = person.returnFormattedDetails()
        var lines = result.split('\n')
        expect(lines[4]).to.equal("Email Addresses:")
        })

    it('includes email', function() {
        var person = new Person('Jon', 'Smith', "3 April 1998")
        person.addEmail("teo@example.com")
        person.addEmail("test@testingexample.com")
        var result = person.returnFormattedDetails()
        var lines = result.split('\n')
        expect(lines[5]).to.equal("- teo@example.com")
        expect(lines[6]).to.equal("- test@testingexample.com")
        })

    // TODO: need to finish this implementation

    // it('includes empty line and phone number title', function() {
    //     var person = new Person('Joe', 'Bloggs', "1 Jan 1990")
    //     var result = person.returnFormattedDetails()
    //     var lines = result.split('\n')
    //     expect(result.toString()).to.equal("Joe Bloggs\n----------\nDOB: 1 Jan 1990\n\nEmail Addresses:\n\nPhone Numbers:\n")
    //     })

    // it('includes phone', function() {
    //     var person = new Person('Joe', 'Bloggs', "1 Jan 1990")
    //     person.addPhoneNumber("07654321987")
    //     person.addEmail("joe@example.com")

    //     var result = person.returnFormattedDetails()
    //     var lines = result.split('\n')
    //     expect(lines).to.equal("Joe Bloggs\n----------\nDOB: 1 Jan 1990\n\nEmail Addresses:\n- joe@example.com\n\nPhone Numbers:\n- 07654321987")
        
    //     })
    })