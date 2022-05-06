import { AbstractControl } from "@angular/forms";

export const ValidationMessages = {
  getCodigoMessages(codigo: AbstractControl): string {
    return codigo.hasError('required') ? 'Código é requerido' : '';
  },

  getCpfMessages(cpf: AbstractControl): string {
    return cpf.hasError('required') ? 'CPF é requerido' : '';
  },

  getNomeMessages(nome: AbstractControl): string {
    return nome.hasError('required') ? 'Nome é requerido' : '';
  },

  getEmailMessages(email: AbstractControl): string {
    return email.hasError('required') ? 'Email é requerido' : '';
  },

  getTelefoneMessages(telefone: AbstractControl): string {
    return telefone.hasError('required') ? 'Telefone é requerido' : '';
  }

}