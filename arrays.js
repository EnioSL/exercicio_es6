
// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 9 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Daniela', nota: 4 },
    { nome: 'Eduardo', nota: 6 }
];

// Função para filtrar alunos com nota maior ou igual a 6
const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Usando a função para obter os alunos aprovados
const aprovados = alunosAprovados(alunos);
console.log(aprovados);


