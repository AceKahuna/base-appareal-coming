const form = document.getElementById("form");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const errorIcon = document.querySelector(".icon");
const root = document.documentElement;

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    validateEmail();
});
 
// email format validation
const checkMail = (email) =>{
    let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailFormat.test((email).toLowerCase());
}

//validate email
const validateEmail = () => {
    if(!checkMail(email.value)){
        root.style.setProperty('--border', '2px solid hsl(0, 93%, 68%)');
        errorIcon.classList.remove('icon');
        errorIcon.classList.add('ierror');
        msg.classList.remove('msg');
        msg.classList.add('errorMessage');
    } else{
        email.value = ' '; 
        root.style.setProperty('--border', '1px solid');
        errorIcon.classList.add('icon');
        errorIcon.classList.remove('ierror');
        msg.classList.add('msg');
        msg.classList.remove('errorMessage');
    }
}