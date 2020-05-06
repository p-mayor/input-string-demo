// Get the elements we need from the DOM
let inputElement1 = document.querySelector("#input-1")
let inputElement2 = document.querySelector("#input-2")

let submitButton = document.querySelector("#submit")

let outputElement = document.querySelector("#output")

submitButton.addEventListener("click", function () {
    // Get user input strings from inputElements
    let inputString1 = inputElement1.value
    let inputString2 = inputElement2.value

    // Use control flow to determine output
    if (inputString2.includes(inputString1)) {
        console.log("it is included")
        outputElement.innerHTML = "yes"
    } else {
        console.log("it is not included")
        outputElement.innerHTML = "no"
    }
})



