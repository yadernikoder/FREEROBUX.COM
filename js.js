
let amountElement = document.getElementById("amountID")
let robuxElement = document.getElementById("robux")
let robux = 0


function SendNumber() {
    robux = Number(amountElement.value)
    robuxElement.innerHTML = robux
}