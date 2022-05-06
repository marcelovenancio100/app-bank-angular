export class Cliente {
  codigo: string;
  cpf: string;
  nome: string;
  email: string;
  telefone: string;

  //TODO Implmentar os outros campos do cliente

  constructor(codigo: string, cpf: string, nome: string, email: string, telefone: string) {
    this.codigo = codigo;
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}