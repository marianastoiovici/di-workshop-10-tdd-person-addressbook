// Your Person class goes here!
class Person {
    constructor(firstName, surname, dob){
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.surname = surname
        this.dob = dob
    }
}

module.exports = Person