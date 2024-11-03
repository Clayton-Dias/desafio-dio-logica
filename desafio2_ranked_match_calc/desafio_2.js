// Função para calcular o nível baseado nas vitórias
function calcularNivel(win, lose) {

    // Calcula o saldo de vitórias 
    const saldoVitorias = win - lose;
    
    // Variável para armazenar o rank 
    let rank;

    switch (true) {
        case (win < 10):
            rank = 'Ferro';
            break;
        case (win >= 11 && win <= 20):
            rank = 'Bronze';
            break;
        case (win >= 21 && win <= 50):
            rank = 'Prata';
            break;
        case (win >= 51 && win <= 80):
            rank = 'Ouro';
            break;
        case (win >= 81 && win <= 90):
            rank = 'Diamante';
            break;
        case (win >= 91 && win <= 100):
            rank = 'Lendário';
            break;
        case (win >= 101):
            rank = 'Imortal';
            break;
        default:
            rank = 'Desconhecido';
    }

    return { saldoVitorias, rank };
}

// Exemplo de uso
const win = 85;  
const lose = 25;

let resultado = calcularNivel(win, lose);

console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.rank}!`);

