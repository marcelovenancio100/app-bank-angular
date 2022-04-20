import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.component.html',
  styleUrls: ['./tela3.component.scss']
})
export class Tela3Component implements OnChanges, OnInit {

  constructor() {
    console.log('***** CONSTRUTOR');
  }

  ngOnChanges() {
    console.log('***** PRIMEIRO CICLO NG_ON_CHANGES');
  }

  ngOnInit() {
    console.log('***** SEGUNDO CICLO NG_ON_INIT');
  }

  ngDoCheck() {
    console.log('***** TERCEIRO CICLO NG_DO_CHECK');
  }

  ngAfterContentInit() {
    console.log('***** QUARTO CICLO NG_AFTER_CONTENT_INIT');
  }

  ngAfterContentChecked() {
    console.log('***** QUINTO CICLO NG_AFTER_CONTENT_CHECKED');
  }

  ngAfterViewInit() {
    console.log('***** SEXTO CICLO NG_AFTER_VIEW_INIT');
  }

  ngAfterViewChecked() {
    console.log('***** SÉTIMO CICLO NG_AFTER_VIEW_CHECKED');
  }

  ngOnDestroy() {
    console.log('***** OITAVO CICLO NG_ON_DESTROY');
  }
}
