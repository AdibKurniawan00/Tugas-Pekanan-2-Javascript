const prompt = require('prompt-sync')({sigint: true});
const inputValue = prompt('Input angka: ');
let output;

if(inputValue<0){
    output = "Tidak bisa input bilangan negatif"
} else if(inputValue %2!=0) {
    output = "Tidak bisa input bilangan ganjil"
} else {
    output = Math.sqrt(inputValue)
}

console.log(output)