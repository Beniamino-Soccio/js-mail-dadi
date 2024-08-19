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

/*
-creo l'array con un tot di email valide per il login 
-creo un piccolo form per inserire l'email
-"raccolgo" l'email con il bottone
-confronto l'email con quelle presente nell'array ciclandolo
-stampo un commento in base al risultato
*/

//creazione array email
const listEmail = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com', 'eee@gmail.com'];
console.table(listEmail);

//raccolgo il bottone dal DOM
const button = document.getElementById('confirm');

// !click bottone
button.addEventListener('click', function(){
    /*al cliccare del bottone raccolgo gli elementi che mi interessano*/
    const emailUserField = document.getElementById('email-user');
    const alertElement = document.getElementById('alert');

    const emailUser = emailUserField.value.trim();
    console.log(emailUser);

    /*confronto email*/

    let alert = 'inserisci una email corretta';

    for (let i = 0; i < listEmail.length; i++) {
        if (emailUser === listEmail[i]) {
            alert = "login effettuato";
        }
    }
    //output responso email
    console.log(alert);
    alertElement.innerHTML = alert;
})