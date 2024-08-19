console.log('JS OK');
// FASE PREPARAZIONE
let message = "il vincitore è: ";

/*prendo gli elementi dal dom */
const userNumElement = document.getElementById('user-num');
const cpuNumElement = document.getElementById('cpu-num');
const resultElement = document.getElementById('result');

//FASE ELABORAZIONE
// ! genero i due numeri casuali del dado

const numberUser = Math.round(Math.random() * 5) + 1;
console.log(numberUser);

const numberCpu = Math.round(Math.random() * 5) + 1;
console.log(numberCpu);

if (numberCpu > numberUser){
    message += "CPU!"
} else if (numberCpu < numberUser) {
    message += "USER!"
} else {
    message += "nessuno è un pareggio!"
}

//FASE OUTPUT
console.log(message);
userNumElement.innerHTML = numberUser;
cpuNumElement.innerHTML = numberCpu;
resultElement.innerHTML = message;

// ES.2
