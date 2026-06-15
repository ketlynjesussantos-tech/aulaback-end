const readline = require("readline-sync");

function podeVotar(idade) {
    return idade >= 16;
}

let idade = readline.questionInt("Digite sua idade: ");

if (podeVotar(idade)) {
    console.log("Você pode votar.");
} else {
    console.log("Você não pode votar.");
}