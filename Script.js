const valueBox = document.querySelector('#valueBox')
const downValue = document.querySelector('#decrementbtn')
const resetValue = document.querySelector('#resetbtn')
const upValue = document.querySelector('#incrementbtn')

// Increment in the value
upValue.addEventListener("click", ()=>{
    valueBox.innerText++
})

// Decrement in the value
downValue.addEventListener("click", ()=>{
    if ( valueBox.innerText >0) {
        valueBox.innerText--
    }
})
// Reset counter value 
resetValue.addEventListener("click", ()=>{
    valueBox.innerText=0
})