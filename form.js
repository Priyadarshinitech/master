function validation() {
   let fname = document.getElementById("first-name").value;
   let errorfName = document.getElementById("error-fname");
   let regexAlphabets = /^[A-Za-z]+$/;
   if(fname == "" || fname == undefined || fname == null){
        errorfName.innerText = "Please enter your first name";
        return false;
   } else if(!regexAlphabets.test(fname)){
        errorfName.innerText = "Please enter only alphabets";
        return false;
   } 
   else {
        errorfName.innerText = "";
   }

   let lname = document.getElementById("last-name").value;
   let errorLname = document.getElementById("error-lname");

   if(lname =="" || lname == undefined || lname == null){
        errorLname.innerText = "Please enter your last name";
        return false;
    }else if(!regexAlphabets.test(lname)){
        errorLname.innerText = "Please enter only alphabets";
        return false;
    }
     else {
        errorLname.innerText = "";
    }

    let phoneNumber = document.getElementById("phone-number").value;
    let errorPhoneNumber = document.getElementById("error-phone-number");
    let regexNumbers = /^\d+$/;

    if (phoneNumber =="" || phoneNumber == undefined || phoneNumber == null){
        errorPhoneNumber.innerText = "Pleae enter phone number";
        return false;
    }else if (phoneNumber.length !=10){
        errorPhoneNumber.innerText = "Please enter 10 digit number";
        return false;
    } 
    else if(!regexNumbers.test(phoneNumber)){
        errorPhoneNumber.innerText = "Please enter number only";
        return false;
    }
    else{
        errorPhoneNumber.innerText = "";
    }

    // let panNumber = document.getElementById("pan-number").value;
    // let errorPanNumber = document.getElementById("error-pan-number");

    // if (panNumber =="" || panNumber == undefined || panNumber == null){
    //     errorPanNumber.innerText = "Please enter pan number";
    //      return false;
    // }
    // else{
    //     errorPanNumber.innerText = "";
    // }

    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("error-email");
    let regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email =="" || email == undefined || email == null ){
        errorEmail.innerText = "Please enter Email";
        return false;
    }else if(!regexEmail.test(email)){
        errorEmail.innerText = "Please enter valid email address";
        return false;
    }else {
        errorEmail.innerText = "";
    }

    // let company = document.getElementById("company").value;
    // let errorCompanyName = document.getElementById("error-company-name");

    // if (company == "" || company == undefined || company == null){
    //     errorCompanyName.innerText = "Please enter company name";
    //      return false;
    // }else{
    //         errorCompanyName.innerText = "";
    //     }

    let streetNumber = document.getElementById("street-number").value;
    let errorStreetNumber = document.getElementById("error-street-number");

    if (streetNumber == "" || streetNumber == undefined || streetNumber == null){
        errorStreetNumber.innerText = "Please enter street number";
        return false;
    }else{
        errorStreetNumber.innerText = "";
    }

    let city = document.getElementById("city").value;
    let errorCity = document.getElementById("error-city");

    if(city == "" || city == undefined || city == null){
        errorCity.innerText = "Please enter city";
        return false;
    }else{
        errorCity.innerText = "";
    }

    let region = document.getElementById("region").value;
    let errorRegion = document.getElementById("error-region");

    if(region == "" || region == undefined || region == null){
        errorRegion.innerText = "Please enter region";
        return false;
    }else{
        errorRegion.innerText = "";
    }

    let postalCode = document.getElementById("postal-code").value;
    let errorPostalCode = document.getElementById("error-postal-code");

    if(postalCode == "" || postalCode == undefined || postalCode == null){
        errorPostalCode.innerText = "Please enter region";
        return false;
    }else{
        errorPostalCode.innerText = "";
    }

    let selectedCountry = document.getElementById("select-country").value;
    let errorSelectCountry = document.getElementById("error-select-country");

    if (selectedCountry == "" || selectedCountry == undefined || selectedCountry == null){
        errorSelectCountry.innerText = "Please select country";
        return false;
    }else {
        errorSelectCountry.innerText = "";
    }
}



