export class Cliente {
  codigo: string;
  nome: string;
  email: string;
  telefone: string;

  //TODO Implmentar os outros campos do cliente

  constructor(codigo: string, nome: string, email: string, telefone: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}