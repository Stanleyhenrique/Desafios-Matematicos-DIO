/* 

Entrada
A entrada é composta por uma única linha contendo dois valores inteiros. O primeiro valor corresponde ao percentual observado por Jade na noite de dois dias atrás. O segundo valor corresponde ao percentual observado por jade na noite anterior.

Saída
Baseado nos dois percentuais observados por Jade, imprima na tela a fase na qual a lua se encontrava na noite anterior, conforme o exemplo abaixo. Não esqueça de imprimir o caractere de fim de linha após a saída :).

*/

let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && final <= 3) {
    print('crescente');
} else if (inicio >= final && final <= 96) {
    print('minguante');                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}