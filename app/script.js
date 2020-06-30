const form = document.getElementById("form");
const email = document.getElementById("email");
const msg = document.querySelector(".msg");
const errorIcon = document.querySelector(".icon");

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    validateEmail();
    submit();
});

//validate email
const validateEmail = () => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value === mailFormat){
        return true;
        email.value = ' ';   
    } else{
        errorIcon.classList.remove('icon');
        errorIcon.classList.add('ierror');
        msg.classList.remove('msg');
        msg.classList.add('errorMessage');
        return false;
    }
}





