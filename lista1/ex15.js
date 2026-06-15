const produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Webcam", preco: 180 },
    { id: 5, nome: "Headset", preco: 250 }
];

// a)
const produtoId3 = produtos.find(produto => produto.id === 3);
console.log(produtoId3);

// b)
const caros = produtos.filter(produto => produto.preco > 100);
console.log(caros);

// c)
const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

// d)
produtos.forEach(produto => {
    console.log(
        `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$${produto.preco}`
    );
});