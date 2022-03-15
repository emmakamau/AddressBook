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

        if(firstName!=="" && lastName!==""){
            var newContact = new myContact(firstName,lastName)

            $(".new-address").each(function(){
                var street = $(this).find("input.street").val()
                var town = $(this).find("input.town").val()
                var county = $(this).find("input.county").val()

                if(street!=="" && town!=="" && county!==""){
                    var newAddress = new adresses(street,town,county)
                    newContact.addresses.push(newAddress)
                }else{
                    alert("Form inputs cannot be empty!")
                }
            })
            $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        
            $("input#fname").val("")
            $("input#lname").val("")
            $("input.street").val("")
            $("input.town").val("")
            $("input.county").val("")
        }else{
            alert("Forrm inputs cannot be empty!")
        }   
    }) 
    //Add new address input form
    $("span#add-address-input").click(function(){
        $("div#new-addresses").append(
            "<div class='new-address'>"+
                "<div class='form-group'>"+
                    "<label for='street'>Street</label>"+
                    "<input type='text' class='form-control street' placeholder='Sonia Lane'>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label for='town'>Town</label>"+
                    "<input type='text' class='form-control town' placeholder='Mtwapa'>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label for='county'>County</label>"+
                    "<input type='text' class='form-control county' placeholder='Kilifi'>"+
                "</div>"+
            "</div>"
        )
    })
})

