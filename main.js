let inputElement1 = document.querySelector("#input-1")
let inputElement2 = document.querySelector("#input-2")

let submitButton = document.querySelector("#submit")

let outputElement = document.querySelector("#output")

submitButton.addEventListener("click", function(){
    let inputString1 = inputElement1.value
    let inputString2 = inputElement2.value
    
    if(inputString2.includes(inputString1)){
        console.log("it is included")
        outputElement.innerHTML = "yes"
    } else {
        console.log("it is not included")
        outputElement.innerHTML = "no"
    }
})



