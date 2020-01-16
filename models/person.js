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

    returnFormattedDetails(){
        var lengthOfName = this.fullName().length
        var dots =""
        for ( var i=0; i<lengthOfName; i++){
            dots +="-"   
        }
        var emails =""
        for( var i=0; i<this.emails.length; i++){
           emails+="- " + this.emails[i] + "\n"
        }
        var phones =""
        for( var i=0; i<this.phoneNumbers.length; i++){
           phones+="- " + this.phones[i] + "\n"
        }
        
        var lines = [
            this.fullName(),
            dots,
            "DOB: " + this.dob,
            ,
            "Email Addresses:",
            emails,
            ,
            "Phone Numbers:",
            phones,
        ]
        return lines.join("\n")
    }
}

module.exports = Person