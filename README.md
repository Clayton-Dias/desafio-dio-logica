
# Bootcamp - Fundamentos da Programação

## Descrição

Este repositório contém desafios práticos desenvolvidos durante o Bootcamp de Fundamentos da Programação. O foco é dominar os conceitos básicos de programação utilizando JavaScript. Ao longo do curso, aprendemos a trabalhar com variáveis, laços de repetição, funções e objetos, proporcionando uma base sólida para futuros estudos em programação.

## Objetivos do Bootcamp

- Compreender e aplicar os fundamentos da programação.
- Trabalhar com variáveis e operadores para manipular dados.
- Utilizar laços de repetição para otimizar fluxos de código.
- Criar funções para modularizar e organizar o código.
- Explorar o conceito de objetos para criar estruturas de dados complexas.

## Desafios Realizados

### 1. Classificador de Nível de Herói

Neste desafio, criamos uma estrutura de decisão para classificar o nível de um herói com base em sua experiência (XP).

#### Código

```javascript
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
```

### 2. Calculadora de Partidas Rankeadas

Neste desafio, criamos uma função para calcular o nível de um jogador com base em suas vitórias e derrotas.

#### Código

```javascript
// Função para calcular o nível baseado nas vitórias
function calcularNivel(win, lose) {
    const saldoVitorias = win - lose;
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
```

### 3. Classes de um Jogo

Neste desafio, criamos uma classe que representa um herói de uma aventura, incluindo um método para atacar.

#### Código

```javascript
// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'técnica desconhecida';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Criando instâncias da classe Heroi
let heroiWizard = new Heroi("Aisha", 100, "mago");
let heroiWarrior = new Heroi("Elsword", 30, "guerreiro");
let heroiMonk = new Heroi("Labi Picaro", 25, "monge");
let heroiNinja = new Heroi("Storm Shadow", 18, "ninja");

// Chamando o método atacar para cada herói
heroiWizard.atacar();      
heroiWarrior.atacar();  
heroiMonk.atacar(); 
```

## Conclusão

Os desafios realizados durante o Bootcamp ajudaram a solidificar meus conhecimentos em programação. Sinto-me mais preparado para enfrentar projetos futuros e explorar novas linguagens de programação.

## Agradecimentos

Agradeço aos instrutores e colegas do Bootcamp pela colaboração e aprendizado ao longo dessa jornada!
```