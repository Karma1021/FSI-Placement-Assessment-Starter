// HINT: You can delete this console.log after you no longer need it!

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


let gbPlusBtn = document.getElementById('add-gb')
let qtygb= document.getElementById('qty-gb')
let gbMinusBtn = document.getElementById('minus-gb')

// plus and minus gb
gbPlusBtn.addEventListener('click', function(i){
gb++
qtygb.textContent = gb
})

gbMinusBtn.addEventListener('click', function(i){
    gb--;
    qtygb.textContent = gb


    // plus and minus cc
})

let ccMinusBtn= document.getElementById('minus-cc')
let ccPlusBtn= document.getElementById('add-cc')
let qtycc = document.getElementById('qty-cc')




ccPlusBtn.addEventListener('click', function(i){
    cc++
    qtycc.textContent = cc

})



ccMinusBtn.addEventListener('click', function(i){
    cc = cc -1
    qtycc.textContent = cc
})
// sugar plus or minus



let sgrMinusBtn= document.getElementById('minus-sugar')
let sgrPlusBtn= document.getElementById('add-sugar')
let qtysugar = document.getElementById('qty-sugar')


sgrPlusBtn.addEventListener('click', function(i){
    sugar++
    qtysugar.textContent = sugar

})



sgrMinusBtn.addEventListener('click', function(i){
    sugar = sugar -1
    qtysugar.textContent = sugar
    
})

// total amount of cookies


let qtytotal = document.getElementById('qty-total')

function cookies(Array){
    var total = 0;
 for(var i = 0; i <= Array.length; i++){
    
    qtytotal.addEventListener('click', function(i){
    qtytotal = Number(i.target.Array)
    qtytotal += total + Array[i];
    return total;
 

    Array.textContent = total })
    }
}
cookies ([cc, gb, sugar])
    