let testStringElement = document.querySelector("#test-string")

let userInputStringElement = document.querySelector("#input-string")

let submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", function(){
    let inputString = userInputStringElement.value 
    
    if(testStringElement.value.includes(inputString)){
        console.log("it is included")
    } else {
        console.log("it is not included")
    }
})



