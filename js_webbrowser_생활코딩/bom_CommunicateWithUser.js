var alert3 = document.getElementById("alert3");
alert3.addEventListener("click", function(){
    alert("Coding Everyday!!");
})

var confirm2 = document.getElementById("confirm2");
confirm2.addEventListener("click", function(){
    if (confirm("Ok?")){
        alert("Ok!");
    } else {
        alert("Cancle!");
    }
})

var prompt2 = document.getElementById("prompt2");
prompt2.addEventListener("click", function(){
    if (prompt("what your id?") === "kkojae"){
        alert("Welcome!!");
    } else{
        alert("Please Check your ID again!!");
    }
})