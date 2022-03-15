//Person constructor

function myContact(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

//Adress constructor

function adresses(street,city,state){
    this.street = street
    this.city = city
    this.state = state
}

//JQuery

$(document).ready(function(){
    $("form#address-form").submit(function(event){
        event.preventDefault();
        var firstName = $("input#fname").val()
        var lastName = $("input#lname").val()
        var street = $("input#").val()
        var town = $("input#").val()
        var county = $("input#").val()

        var newContact = new myContact(firstName,lastName)
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        console.log(newContact)

        $("input#fname").val("")
        $("input#lname").val("")
    }) 
})