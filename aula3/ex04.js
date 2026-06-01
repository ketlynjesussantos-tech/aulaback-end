const alunos = [
    {id: 1, nome: "Ketlyn", nota: 7.5},
    {id: 2, nome: "Luan", nota: 9.0},
    {id: 3, nome: "Jeane", nota: 6.0},
    {id: 4, nome: "Junior", nota: 8.5},
    {id: 5, nome: "André Felipe", nota: 5.0}
];

const aprovacoes = alunos.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(aprovacoes);