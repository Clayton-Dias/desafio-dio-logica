1// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

         // switch para determinar o tipo de ataque baseado no tipo do herói
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

        // Exibe a mensagem de ataque no console
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
