const premios = [
  "relogio", "pelucia", "smartphone", "chocolate", "fone de ouvidos"
];
const idade = Math.floor(Math.random() * (50 - 8 + 1)) + 8;
const idadeMinima = 18;
let continuar = true;
let quantidadeItensComprados = 0;
let itensComprados = [];

console.log("========================");
console.log("Bem vindo a Gift Machine");
console.log("========================");

while (continuar) {
  
  console.log("Selecione uma opção:");
  console.log(`
  0 - ${premios[0]}
  1 - ${premios[1]}
  2 - ${premios[2]}
  3 - ${premios[3]}
  4 - ${premios[4]}
  5 - Sair
  `);
  
  const op = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  console.log(`> ${op}`)

  if (op !=  5){
    if (idade >= idadeMinima) {
    console.log(`Vc tem ${idade} anos e seu produto é ${premios[op]}.`);
    quantidadeItensComprados++;
    itensComprados.push(premios[op]);
    
    } else if (idade < idadeMinima && [1, 3].includes(op)){
    console.log(`Vc tem ${idade} anos e seu produto é ${premios[op]}.`);
    quantidadeItensComprados++;
    itensComprados.push(premios[op]);
    } else {
    console.log(
      `Não é possível comprar, você tem ${idade} e ` +
      `escolheu o produto ${premios[op]}.`);
    }
  } else {
    continuar = false;
  }

  
}

let listaDeItens = "";

for (let i = 0; i < itensComprados.length; i++){
  listaDeItens += itensComprados[i] + ", ";
}

listaDeItens = listaDeItens.slice(0, listaDeItens.length - 2);

console.log(
    `Você comprou ${quantidadeItensComprados} itens.\n` +
    `Itens: ${listaDeItens}.`);


