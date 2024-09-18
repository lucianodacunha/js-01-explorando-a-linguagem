const premios = [
    "relogio", "pelucia", "smartphone", "chocolate", "fone de ouvidos"
];
const idade = Math.floor(Math.random() * (50 - 8 + 1)) + 8;
const op = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
const idadeMinima = 18;

console.log("========================");
console.log("Bem vindo a Gift Machine");
console.log("========================");

console.log("Selecione uma opção:");
console.log(`
  0 - ${premios[0]}
  1 - ${premios[1]}
  2 - ${premios[2]}
  3 - ${premios[3]}
  4 - ${premios[4]}
`);

console.log(`> ${op}`)

if (idade >= idadeMinima) {
  console.log(`Vc tem ${idade} anos e seu produto é ${premios[op]}.`);

} else if (idade < idadeMinima && [1, 3].includes(op)){
  console.log(`Vc tem ${idade} anos e seu produto é ${premios[op]}.`);
} else {
  console.log(
    `Não é possível comprar, você tem ${idade} e ` +
    `escolheu o produto ${premios[op]}.`);
}