// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Django Daponte" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')


// Code to update name display
credit.textContent = `Created by ${yourName}`

let totalgb = 0
let gbPlusBtn = document.getElementById('add-gb')
let qtygb= document.getElementById('qty-gb')
let gbMinusBtn = document.getElementById('minus-gb')


gbPlusBtn.addEventListener('click', function(i){
gb++
qtygb.textContent = gb

gbMinusBtn.addEventListener('click', function(i){
    gb = gb -1
    qtygb.textContent = gb
    


})









// HINT: You can delete this console.log after you no longer need it!


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons