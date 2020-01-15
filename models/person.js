// Your Person class goes here!
class Person {
    constructor(firstName, surname, dob){
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.surname = surname
        this.dob = dob
        this.emails = []
        this.phoneNumbers = []
    }

    fullName(){
        return this.firstName + " " + this.surname 
    }

    addEmail(email){
        this.emails.push(email)
    }

    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber)
    }
}

module.exports = Person