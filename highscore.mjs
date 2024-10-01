import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question(" Geef een getal."));
let getal2 = parseFloat(await userInput.question(" Geef een getal."));
let getal3 = parseFloat(await userInput.question(" Geef een getal."));
let getal4 = parseFloat(await userInput.question(" Geef een getal."));
let getal5 = parseFloat(await userInput.question(" Geef een getal."));
let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5


if(getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5){
    console.log(getal1 + " is de hoogste getal")
}else if(getal2 > getal1 && getal2 > getal3 && getal2 > getal4 && getal1 > getal5){
    console.log(getal2 + " is de hoogste getal")
}else if(getal3 > getal1 && getal3 > getal2 && getal3 > getal4 && getal3 > getal5){
    console.log(getal3 + " is de hoogste getal")    
}else if(getal4 > getal1 && getal4 > getal2 && getal4 > getal3 && getal4 > getal5){
    console.log(getal4 + " is de hoogste getal") 
}else if(getal5 > getal1 && getal5 > getal2 && getal5 > getal3 && getal5 > getal4){
    console.log(getal5 + " is de hoogste getal")
}

if(getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5){
    console.log(getal1 + " is de kleinste getal.")
}else if(getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal1 < getal5){
    console.log(getal2 + " is de kleinste getal.")
}else if(getal3 < getal1 && getal3 < getal2 && getal3 < getal4 && getal3 < getal5){
    console.log(getal3 + " is de kleinste getal.")    
}else if(getal4 < getal1 && getal4 < getal2 && getal4 < getal3 && getal4 < getal5){
    console.log(getal4 + " is de kleinste getal") 
}else if(getal5 < getal1 && getal5 < getal2 && getal5 < getal3 && getal5 < getal4){
    console.log(getal5 + " is de kleinste getal")
}
console.log("de gemiddelde is " + gemiddelde );








process.exit()