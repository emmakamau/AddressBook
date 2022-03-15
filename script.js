//Person constructor

function myContact(fName,lName){
    this.firstName = fName
    this.lastName = lName
    this.addresses = []
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
        //Form inputs received and processed
        event.preventDefault();
        var firstName = $("input#fname").val()
        var lastName = $("input#lname").val()
        var street = $("input#street").val()
        var town = $("input#town").val()
        var county = $("input#county").val()

        var newContact = new myContact(firstName,lastName)
        var newAddress = new adresses(street,town,county)

        newContact.addresses.push(newAddress)

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        console.log(newContact)
        console.log(newContact.addresses)

        $("input#fname").val("")
        $("input#lname").val("")
    }) 
    //Add new address input form
    $("span#add-address-input").click(function(){
        $("div#new-addresses").append(
            "<div class='new-addresses'>"+
                "<div class='form-group'>"+
                    "<label for='street'>Street</label>"+
                    "<input type='text' class='form-control' id='street' placeholder='Sonia Lane'>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label for='town'>Town</label>"+
                    "<input type='text' class='form-control' id='town' placeholder='Mtwapa'>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label for='county'>County</label>"+
                    "<input type='text' class='form-control' id='county' placeholder='Kilifi'>"+
                "</div>"+
            "</div>"
        )
    })
})

