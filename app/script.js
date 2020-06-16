const form = document.getElementById("form");
const email = document.getElementById("email");
const error= document.getElementById("error");
const submit = document.getElementById("submit");


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    validateEmail();
    errormsg();
});

function validateEmail(){   
    const emailValue  = email.value.trim();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        return true;
    } else{
        return false; 
        const errormsg = document.querySelector('.msg')

        errormsg.classList.add("errorMessage")



    }
    
}





