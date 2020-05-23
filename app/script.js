const form = document.getElementById("form");
const email = document.getElementById("email");
const error= document.getElementById("error");
const submit = document.getElementById("submit");
const errorMessage= document.getElementById("errorMessage");


form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const emailValue  =email.value.trim();


    if (emailValue == ' ' || ""){
        //show error
        //add error class
        set
    }
}
