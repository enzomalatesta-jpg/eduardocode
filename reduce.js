
console.log("--- Exemplo 1: Soma de números (Básico) ---");

const valores = [10,25,30,45]

const somaTotal = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log("Valores:", valores);
console.log("Soma total:", somaTotal);
console.log("\n");

console.log("--- Exemplo 2: Subtotal de carrinho de compras (Intermediário) ---");

const carrinho = [
    { item: "Camiseta Dev", preco: 49.90 },
    { item: "Caneca JS", preco: 29.90 },
    { item: "Adesivo Node", preco: 10.00 }
];

const subtotal = carrinho.reduce((acc, produto) => {
    return acc + produto.preco;
}, 0);

console.log(`Subtotal do Carrinho: R$ ${subtotal.toFixed(2)}`);
console.log("\n");
console.log("--- Exemplo 3: Fechamento de Pedido e Relatório (Back-End Real) ---");

const pedido = [
    { id: 1, nome: "Hambúrguer Artesanal", preco: 32.0, qtd: 2 },
    { id: 2, nome: "Batata Frita Rústica", preco: 16.0, qtd: 1 },
    { id: 3, nome: "Refrigerante Lata", preco: 7.0, qtd: 3 }
];

const taxaEntrega = 8.50;


const totalItens = pedido.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.qtd);
}, 0);

const totalFinal = totalItens + taxaEntrega;

console.log("Itens do Pedido:", pedido);
console.log(`Subtotal dos Itens : R$ ${totalItens.toFixed(2)}`);
console.log(`Taxa de Entrega    : R$ ${taxaEntrega.toFixed(2)}`);
console.log(`Total a Pagar      : R$ ${totalFinal.toFixed(2)}`);
