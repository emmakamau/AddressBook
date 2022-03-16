//Person constructor

function myContact(fName,lName){
    this.firstName = fName
    this.lastName = lName
    this.addresses = []
}

//Adress constructor

function adresses(street,town,county){
    this.street = street
    this.town = town
    this.county = county
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
        }else{
            alert("Forrm inputs cannot be empty!")
        }
        
        console.log(newContact)
        $("ul.contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        //Click name to display address details
        $(".contact").last().click(function(){
            $("div#show-contact").show()
            $("div#show-contact h2").text(newContact.firstName)
            $("ul#addresses").text("")
            newContact.addresses.forEach(function(address){
                $("ul#addresses").append(
                    "<li>"+address.street+", "+ address.town +", "+ address.county+"</li>"
                )
            })
        })
        $("input#fname").val("")
        $("input#lname").val("")
        $("input.street").val("")
        $("input.town").val("")
        $("input.county").val("")
        $("div#new-address_2").remove();
        $("div#new-address_3").remove();
    }) 

    //Add new address in input form
    $("span#add-address-input").click(function(){

        var total_element = $(".new-address").length;

        if(total_element <= 2){
            var lastid = $(".new-address:last").attr("id");
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1])+1;
            $("div#new-addresses").append(
                `<div class='new-address' id='new-address_${nextindex}'>`+
                    "<hr>"+
                    "<span class='btn btn-primary' id='del-address-input' onclick='removeAddressForm()'>Remove Address</span>"+
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
        }else{
            alert("I can only take three addresses!")
        }
    })

    //Refresh page
    $("span#refresh").click(function(){
        document.querySelector("form").reset();
    })
});


//JavaScript

//Function to remove address form input
function removeAddressForm(){
    var id = $(".new-address:last").attr("id");
    var split_id = id.split("_");
    var deleteindex = split_id[1];
    var oldInput=("div.new-address_"+deleteindex)
   
    $("div#new-address_"+ deleteindex).remove();
}

    

