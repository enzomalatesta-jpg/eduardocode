console.log("exemplos com map()");
console.log("exemplo 1: dobro de numeros")
const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Original: ", numeros);
console.log("Dobrados: ", dobro);
console.log("\n");
console.log("exemplo 2: extrair apenas os nomes")
const pessoas = [
  { nome: "ana silva", idade: 22 },
  { nome: "Bruno costa", idade: 17 },
  { nome: "Carlos souza", idade: 30 }
];
const apenasNomes = pessoas.map((usuario) => usuario.nome);
console.log("listade nomes: ", apenasNomes);
console.log("\n");
console.log("exemplo 3: DTO e sanitização de dados de API");
const produtosbanco = [
  { id: 101, nome: "Teclado mecanico rgb", preco: 250.0, estoque: 15, custointerno: 120.0 },
{ id: 102, nome: "Mouse gamer", preco: 120.0, estoque: 0, custointerno: 50.0 },
{ id: 103, nome: "Monitor 144hz", preco: 1100.0, estoque: 8, custointerno: 700.0 }
];
const respostaapipublica = produtosbanco.map((produto) => {
  return {
    id: produto.id,
    titulo: produto.nome.toUpperCase(),
    precoformatado: `R$ ${produto.preco.toFixed(2)}`,
    disponivel: produto.estoque > 0 
    };
});
console.log("resposta da api:(Sem custo interno) " );
console.log("resposta da api: ", respostaapipublica);