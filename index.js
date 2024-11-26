
let count = 0;

function increment(){
    document.getElementById("count-el").innerText = ++count;
}

function save(){
    document.getElementById("message").innerText += " - " + count; 
    count = 0;
    document.getElementById("count-el").innerText = 0;
}

function reset(){
    document.getElementById("message").innerText = "Previous entries";
    count = 0;
    document.getElementById("count-el").innerText = 0;
}

function error(){
    document.getElementById("errormsg").innerText = "There is an error, Please try again later"
}
