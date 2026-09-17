console.log("executing filter()");
console.log("exemplo 1: filtrar numeros pares");
const idade = [12, 17, 18, 21, 14, 30, 25];
const maioridade = idade.filter((idade) => {
    return idade >= 18;
});
console.log("todas as idades: ", idade);
console.log("maiores de idade: ", maioridade);
console.log("\n");
console.log("exemplo 2: filtrar cadastros ativos");
const usuarios = [
    { id: 1, nome: "ana", ativo: true },
    { id: 2, nome: "Bruno ", ativo: false },
    { id: 3, nome: "Carlos ", ativo: true },
    { id: 4, nome: "Diana ", ativo: false }
];
const usuariosativos = usuarios.filter((usuario) => usuario.ativo);
console.log("usuarios ativos: ", usuariosativos);
console.log("\n");
console.log("exemplo 3: Endpoint de vitrine com produtos em destaque");
const catalogo = [
    { id: 101, nome: "Teclado mecanico", categoria: "Periféricos", preco: 250.0, destaque: true },
    { id: 102, nome: "Mouse gamer", categoria: "Periféricos", preco: 120.0, destaque: false },
    { id: 103, nome: "Monitor 144hz", categoria: "Monitores", preco: 1100.0, destaque: true },
    { id: 104, nome: "cabo HDMI", categoria: "Acessórios", preco: 800.0, destaque: false }
];
const perifericosdisponiveis = catalogo.filter((item) => {
    return item.categoria === "Periféricos" && item.ativo > 0;
});
console.log("periféricos disponíveis para venda: ");
console.log(perifericosdisponiveis);
//fim