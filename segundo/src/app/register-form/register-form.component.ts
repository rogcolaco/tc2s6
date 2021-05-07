import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  person : Person = {
    name:"",
    age:0,
    image:""
  };

  constructor(private regService : RegisterService) { }

  register(){
    if(this.regService.registerService(this.person)) {
      alert("Cadastro Realizado com sucesso");
      this.initializePerson();
    }
    else{
      alert("Falha no Cadastro de nova pessoa");
    }
  }

  initializePerson(){
    this.person = { 
      name:"",
      age:0,
      image:""
    }
  }

  ngOnInit(): void {
  }

}
