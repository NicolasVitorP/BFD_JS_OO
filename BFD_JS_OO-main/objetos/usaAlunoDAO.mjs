import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';

import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const aluno = new Aluno();
aluno.setNome("João");
aluno.setEmail("joao@ifb.edu.br");
aluno.setMatricula("2023123456");

const end = new Endereco();
end.setLogradouro("Av. Central");
end.setCep("70001-111");
aluno.setEndereco(end);

const fone = new Telefone();
fone.setDdd("61");
fone.setNumero("98888-7766");
aluno.addTelefone(fone);

if (aluno.setCurso) aluno.setCurso("Informática"); // Se existir o método

const alunoDAO = new AlunoDAO(aluno);

var x = alunoDAO.toJSON();
alunoDAO.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(alunoDAO.recoveryJSON());