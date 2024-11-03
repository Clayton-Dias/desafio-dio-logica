// Variáveis
const nomeHeroi = "Xyz";

let xpHeroi = 6547;

let patenteHeroi;

// Estrutura de decisão para determinar o nível do herói
if (xpHeroi < 1000) {
    patenteHeroi = 'Ferro';
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    patenteHeroi = 'Bronze';
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    patenteHeroi = 'Prata';
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    patenteHeroi = 'Ouro';
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    patenteHeroi = 'Platina';
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    patenteHeroi = 'Ascendente';
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    patenteHeroi = 'Imortal';
} else {
    patenteHeroi = 'Radiante';
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${patenteHeroi}!`);