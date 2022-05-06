import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../cliente';

export const DATA: Array<Cliente> = [
  {
    'codigo': '001',
    'cpf': '11111111111',
    'nome': 'Marcelo Venancio',
    'email': 'marcelo@email.com',
    'telefone': '11 3456 3434'
  },
  {
    'codigo': '002',
    'cpf': '22222222222',
    'nome': 'João da Silva',
    'email': 'joao@email.com',
    'telefone': '11 1233 1223'
  },
  {
    'codigo': '003',
    'cpf': '33333333333',
    'nome': 'Fernando Pessoa',
    'email': 'fernando@email.com',
    'telefone': '11 2233 3434'
  },
  {
    'codigo': '004',
    'cpf': '44444444444',
    'nome': 'Dom Pedro I',
    'email': 'dom@email.com',
    'telefone': '11 5656 2222'
  },
  {
    'codigo': '005',
    'cpf': '55555555555',
    'nome': 'Jiraya',
    'email': 'jiraya@email.com',
    'telefone': '11 1235 6636'
  },
  {
    'codigo': '006',
    'cpf': '66666666666',
    'nome': 'Cebolinha',
    'email': 'cebolinha@email.com',
    'telefone': '11 2323 7777'
  },
  {
    'codigo': '007',
    'cpf': '77777777777',
    'nome': 'Allucard',
    'email': 'allucard@email.com',
    'telefone': '11 2222 1111'
  }
]

@Component({
  selector: 'cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss']
})
export class ClienteListaComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['codigo', 'nome', 'email', 'telefone'];
  dataSource = new MatTableDataSource<Cliente>(DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() clienteConsultaDTO: any;

  constructor() { }

  ngOnInit(): void {
    console.log('***** CARREGOU COMPONENTE CLIENTE-LISTA');
    console.log('***** @INPUT: ', this.clienteConsultaDTO);
    this.dataSource.data = DATA;
    
    // this.ClienteService.getClientes().subscribe(res => {
    //   console.log('***** CARREGANDO CLIENTES');
    //   this.dataSource = res;
    // });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
