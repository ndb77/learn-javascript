let countElement =  document.getElementById("count-el")
let saveElement = document.getElementById("save-el")

var counter = 0
var previous_entries = []

console.log(previous_entries.length)

function increment(){
    counter+=1
    countElement.innerText = counter
}

function save(){
    previous_entries.push(counter)
    saveElement.innerText = "Previous Entries: " + previous_entries.slice(-3).reverse()
    countElement.textContent = 0
    counter = 0
    console.log("Saved")
}

