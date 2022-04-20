import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

import { Tela1Service } from './tela1.service';

@Component({
  selector: 'tela1',
  templateUrl: './tela1.component.html',
  styleUrls: ['./tela1.component.scss']
})
export class Tela1Component implements OnInit {
  title: string = 'Este é o componente de tela 1';
  displayedColumns: string[] = ['codigo', 'nome', 'email', 'telefone'];
  dataSource: Array<Cliente> = [];

  constructor(private tela1Service: Tela1Service) { }

  ngOnInit(): void {
    console.log('***** CARREGOU COMPONENTE TELA1');
    
    this.tela1Service.getClientes().subscribe(res => {
      console.log('***** CARREGANDO CLIENTES');
      this.dataSource = res;
    });
  }

}
