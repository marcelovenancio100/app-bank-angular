import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clienteConsultaDTO: any;
  showResult: boolean = false;

  codigo: any;
  nome: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('***** CARREGOU COMPONENTE CLIENTE');
  }

  limpar() {
    this.clienteConsultaDTO = {};
    this.showResult = false;
  }

  filtrar() {
    console.log('***** FILTRANDO: CÓDIGO: ', this.codigo, ' NOME: ', this.nome);
    this.clienteConsultaDTO = {'codigo': this.codigo, 'nome': this.nome};
    this.showResult = true;
  }

  incluir() {
    this.router.navigateByUrl('pages/cliente/incluir');
  }
}
