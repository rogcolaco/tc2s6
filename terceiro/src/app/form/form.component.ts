import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formCadastro : FormGroup;

  cadastrar() {
    if(this.formCadastro.valid){
      console.log("formulário válido");
    } else {
      console.log("formulário inválido");
    }
  }

  initForm(){
    this.formCadastro = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      idade: new FormControl(0, [Validators.min(18)]),
      sexo: new FormControl(null)
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

}
