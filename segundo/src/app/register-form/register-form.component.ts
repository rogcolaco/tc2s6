import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Person';
import { RegisterService } from '../register.service';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input()
  personSelected!: Person;
  
  person : Person = {
    name:"",
    age:0,
    image:""
  };

  /* isShow: String= this.showService.choseShow; */

  constructor(private regService : RegisterService, private showService : ShowService) { }

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
