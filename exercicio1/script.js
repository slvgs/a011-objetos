//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const frutas = {nome: "Melancia", preco: 10.00, disponibilidade: true}

const frutas2 = {nome2: "Melão", preco2: 7.00, disponibilidade2:false} 

const frutas3 = {nome3: "Maça", preco2: 5.00, disponibilidade2:true}


//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(frutas, frutas2, frutas3)



//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**/
console.log(sacolao)
