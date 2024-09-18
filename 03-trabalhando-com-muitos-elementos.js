// arrays
const valor1 = 1;
const valor2 = 2;
const valor3 = 3;
const valor4 = 4;

const listaDeNumeros = [1,2,3,4];

console.log(listaDeNumeros);

// acessando listas
console.log(listaDeNumeros[1]);

// outras listas
const listaDeTextos = [
  "The Doors", "Evanescence", "Queen", "Elton John"
]

console.log("Liked: " + listaDeTextos);

// adicionar itens na lista
listaDeTextos.push("Linkin Park");
listaDeTextos.push("The Cure");

console.log("Liked: " + listaDeTextos);

// removendo último item da lista.
listaDeTextos.pop();
console.log("Liked: " + listaDeTextos);

// removendo um items específico da lista.
listaDeTextos.splice(2, 1);
console.log("Liked: " + listaDeTextos);
listaDeTextos.splice(0, 2);
console.log("Liked: " + listaDeTextos);