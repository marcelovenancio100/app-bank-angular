import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

import { ValidationMessages } from '../utils/validation.helpers';

@Component({
  selector: 'cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  formGroup: FormGroup;
  validationMessages = ValidationMessages;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadForm();
    console.log('Validation: ', this.validationMessages)
  }

  loadForm() {
    this.formGroup = this.formBuilder.group({
      codigo: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    });
  }

  salvar() {
    console.log('***** SALVANDO CLIENTE: ', this.formGroup.getRawValue());
    this.clienteService.salvar(this.formGroup.getRawValue()).subscribe(() => {
      this.snackbar.open('Cliente salvo com sucesso!', 'Undo', {
        duration: 5000
      });

      this.router.navigateByUrl('/pages/cliente')
    });
  }
}
