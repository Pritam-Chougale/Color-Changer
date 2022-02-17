// a color array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// event listener & calling a annanomous function
btn.addEventListener('click', function(){
    // random number generation between 0 to 3 
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    // assigning random value index
    document.body.style.backgroundColor = colors[randomNumber]
    // get color value to display its code 
    color.textContent = colors[randomNumber]
})

 // random number function math.random
 function getRandomNumber(){
     // Math.floor rounds the num to close int
    return Math.floor(Math.random(0,3) * colors.length) // multiplying it by length to get more than 0
}