import {localStorage} from './localStorage.mjs';
import Aluno from '../Aluno.js';

export default class AlunoDAO {
  #aluno;

  constructor(aluno) {
    if (aluno instanceof Aluno) {
      this.#aluno = aluno;
    }
  }

  toJSON() {
    let fones = [];
    for (let fone of this.#aluno.getTelefones()) {
      fones.push({
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }
    return {
      nome: this.#aluno.getNome(),
      email: this.#aluno.getEmail(),
      matricula: this.#aluno.getMatricula(),
      endereco: {
        logradouro: this.#aluno.getEndereco().getLogradouro(),
        cep: this.#aluno.getEndereco().getCep(),
      },
      telefone: fones,
      curso: this.#aluno.getCurso ? this.#aluno.getCurso() : undefined // se existir
    };
  }

  saveJSON() {
    localStorage.setItem("aluno", JSON.stringify(this.toJSON()));
  }
  recoveryJSON() {
    return JSON.parse(localStorage.getItem("aluno"));
  }
}