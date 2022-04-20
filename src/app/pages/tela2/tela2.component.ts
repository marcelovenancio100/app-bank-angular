import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tela2',
  templateUrl: './tela2.component.html',
  styleUrls: ['./tela2.component.scss']
})
export class Tela2Component implements OnInit {
  title: string = 'Este é o componente de tela 2';
  xpto: string = "Este é meu xpto";

  constructor() { }

  ngOnInit(): void {
    console.log('***** CARREGOU COMPONENTE TELA2');
  }

}
