const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
let len = 10
  
rangeslider.oninput = function() {
  output.innerHTML = this.value;
  len = this.value
}


let passOneEl = document.getElementById("generated-pass-one")
let passTwoEl = document.getElementById("generated-pass-two")

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword() {
    let passOne = ""
    let passTwo = ""
    for(let i=0; i < len ; i++){
    passOne += getRandomCharacter()
    passTwo += getRandomCharacter()
    }
   //console.log(passOne)
   passOneEl.textContent = passOne
   passTwoEl.textContent = passTwo
}
