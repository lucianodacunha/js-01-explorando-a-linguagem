/**
 * Const e let
 * Case Sensitive
 * Adicionando comentários
 * parseInt e parseFloat
 * Usando números com casa decimal
 * Atribuição de variáveis
 */

// Não ocorre o erro, pois o JS é case sensitive.
const primeiraVariavel = "Hello";
const PrimeiraVariavel = "World";

console.log(primeiraVariavel + " " + PrimeiraVariavel);

// Conversão de tipos.
const valor1 = "1";
const valor2 = 2;

console.log("Resultado: " + (parseInt(valor1) + valor2));
console.log("Resultado: " + parseInt(valor1) + valor2);
// Assim como existe o parseInt para inteiros, existe parseFloat, para floats.

// Valores decimais são representados com ponto.
console.log(6.5);
// Virgula é interpretada como um separador de variáveis.
console.log(6,5);

const valorDecimal = 10.2;
console.log("Valor decimal: " + valorDecimal);

const valorDecimalTxt = "3.14";
console.log(valorDecimalTxt);

const totalDaSomaDeFloat = parseFloat(valorDecimalTxt) + valorDecimal;
console.log("Total da soma de float: " + totalDaSomaDeFloat);

// interpolação de variáveis.
const lang = 'Javascript';
console.log(`Aprendendo ${lang}`);

// outras interpolações
const ano = 2024;
const nome = "Luciano";
console.log(`${nome} está aprendendo ${lang} em ${ano}.`);

// const é constante, não é possível reatribuir.
// ano = 2025;
// console.log(`Novo ano: ${ano}`);

// com let é possivel reatribuir, apesar de não recomendável.
let novoAno = 2026;
console.log(`Feliz ${novoAno}!`);

novoAno = 2025;
console.log(`Adeus ano de ${novoAno}.`);

