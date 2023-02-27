let countEl = document.getElementById('count-el')
let saveEl = document.getElementById("save-el")
let count = 0 

function increment () {
    count += 1 
    countEl.innerText = count 
}

function save() {
    let saveNum = count + " - " 
    saveEl.textContent += saveNum 
    countEl.innerText = 0
    count = 0
}



