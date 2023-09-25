const alunos = [
  { nome: "João", nota: 8.5 },
  { nome: "Maria", nota: 2.0 },
  { nome: "Pedro", nota: 7.2 },
  { nome: "Ana", nota: 6.8 },
  { nome: "Carlos", nota: 8.9 },
  { nome: "Laura", nota: 7.5 },
  { nome: "Lucas", nota: 9.5 },
  { nome: "Julia", nota: 5.2 },
  { nome: "Rafael", nota: 8.0 },
  { nome: "Mariana", nota: 7.8 },
  { nome: "André", nota: 9.2 },
  { nome: "Camila", nota: 4.7 },
  { nome: "Eduardo", nota: 6.5 },
  { nome: "Fernanda", nota: 7.0 },
  { nome: "Gustavo", nota: 3.8 },
];

const alunosAprovados = alunos
  .filter(({ nota }) => nota >= 6)
  .map(({ nome }) => nome);

console.log(alunosAprovados);
