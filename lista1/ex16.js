const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.0 },
    { nome: "Daniela", nota: 7.5 },
    { nome: "Eduardo", nota: 5.5 }
];

// Adiciona situação
const boletim = alunos.map(aluno => ({
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));

console.log(boletim);

// Conta aprovados
const aprovados = boletim.filter(
    aluno => aluno.situacao === "Aprovado"
);

console.log(`Aprovados: ${aprovados.length}`);

// Média da turma
const somaNotas = alunos.reduce(
    (total, aluno) => total + aluno.nota,
    0
);

const media = somaNotas / alunos.length;

console.log(`Média da turma: ${media.toFixed(2)}`);