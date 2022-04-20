import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('***** PASSOU PELO PAGES')
  }
}
