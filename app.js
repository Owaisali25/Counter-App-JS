var input = document.getElementById("Inp")
input.value = 0

function Inc(){
    input.value = parseInt(input.value) + 1
    input.style.color = "orange"
}

function Res(){
    input.value = 0
    input.style.color = "white"
}

function Dec(){
    input.value = parseInt(input.value) - 1
    input.style.color = "orange"
}