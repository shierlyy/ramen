function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let checkbox = document.getElementById("agree")

    var ramen = document.getElementById("pre-ramen").checked;
    var dryramen = document.getElementById("pre-dryramen").checked;

    if(ramen == false && dryramen == false){
        alert("Choose your preference ramen!");
        return false;
    }else{
        true;
    }

    if(name.value == ""){
        alert("Full name must required")
    }
    else if(name.value.length < 5){
        alert("Full name must longer than 5 characters")
    }
    else if(email.value == ""){
        alert("Email address must required")
    }
    else if(!email.value.endsWith('@gmail.com')){
        alert("Email must gmail")
    }
    else if(phone.value == ""){
        alert("Phone number must required")
    }
    else if(!phone.value.startsWith('+62')){
        alert("Phone number start with +628xxxxxxxxxx")
    }
    else if(!agree.checked){
        alert("Agree the terms & condition")
    }else{
        alert("Successfully!")
    }
}