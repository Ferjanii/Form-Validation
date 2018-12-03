function sendinformation(event){
    //tester les champs
    if(testvalidcases()===false){
        window.alert("empty fields!!!!");
    }
    else{
        //test first name
        let firstnamemsg=testFirstName();
        if(firstnamemsg===false)
            window.alert("first Name invalid");
        //test last name
        let lastnamemsg=testLastName();
        if(lastnamemsg===false)
            window.alert("last Name invalid");
        //test address
        let adressmsg=testAdress();
        if(adressmsg===false)
            window.alert("adress invalid");
        //test address mail
        let emailadressmsg=testemailAdress();
        if(emailadressmsg===false)
            window.alert("adress Mail invalid");
        //test password
        let passwordmsg=testpassword();
        if(passwordmsg===false)
            window.alert("password invalid");
        //test identique password
        let confirmPasswordmsg=confirmPassword();
        if(confirmPasswordmsg===false)
        window.alert("password not identical");
        //valid champs
        if (firstnamemsg===true && lastnamemsg===true && adressmsg===true && emailadressmsg===true && passwordmsg===true && confirmPasswordmsg===true){
            window.alert("operation done successfully");
        }
    }
}
//tester les champs vides
function testvalidcases(){
    var firstnamecase=document.getElementById("firstName")
    var lastnamecase=document.getElementById("lastName")
    var adresscase=document.getElementById("adress")
    var emailcase=document.getElementById("emailAdress")
    var passwordcase=document.getElementById("password")
    var passwordConnfirmcases=document.getElementById("passwordConnfirm")   
    if(firstnamecase.value==="" || lastnamecase.value===""  || adresscase.value==="" || emailcase.value==="" || passwordcase.value==="" || passwordConnfirmcases.value===""){
        return false;
    }
    else{
        return true;
    }
}
//fontion pour tester la validiter du 'fistName'
function testFirstName(){
    var firstNamevalue = document.getElementById("firstName").value;
    var firstnameval=firstNamevalue.match(/[^A-z]/g);
    if(firstnameval!==null){
        return false;
    }
    else{
        return true;
    }
}
//fonction pour tester la validiter du lastName
function testLastName(){
    var lastNamevalue = document.getElementById("lastName").value;
    var lastnameval=lastNamevalue.match(/[^A-z]/g);
        if(lastnameval!==null){
            return false;
        }
        else{ 
            return true;
        }
    }
    //fonction pour tester la validiter d'adresse
    function testAdress(){
        var adressvalue = document.getElementById("adress").value;
        var adressval=adressvalue.match(/[^A-z0-9]/g);
            if(adressval!==null){
                return false;
            }
            else{ 
                return true;
            }
        }
        //fonction pour tester la validiter de l'email 
        function testemailAdress(){
            var emailAdressvalue = document.getElementById("emailAdress").value;
            var emailadressval=emailAdressvalue.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if(emailadressval===null){
                    return false;
                }
                else{ 
                    return true;
                }
            }
            //fonction pour tester la validiter du password
            function testpassword(){
                var passwordvalue = document.getElementById("password").value;
                var passwordval=passwordvalue.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
                    if(passwordval===null){
                        return false;
                    }
                    else{ 
                        return true;
                    }
                }
            //fonction pour tester password identique
            function confirmPassword(){
                var passwordvalue = document.getElementById("password").value;
                var passwordConnfirmvalue = document.getElementById("passwordConnfirm").value; 
                if( passwordConnfirmvalue ===passwordvalue){
                    return true;
                }   
                else{
                return false;
                }
            }
//add EventListener
document.addEventListener("click", function(event) {
    if (event.target.className === "form-control send-btn"){
       sendinformation(event);
    }
 });
 