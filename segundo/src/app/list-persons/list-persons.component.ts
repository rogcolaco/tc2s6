import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { RegisterService } from '../register.service';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  listPersons : Person[] = this.regService.registerList;
  
  selectedPerson : Person = {
    name:"",
    age:0,
    image:""
  }

  newPerson : Person = {
    name:"______________________",
    age:0,
    image:""
  }

  constructor(private regService : RegisterService, private showService : ShowService) { }

  /*showRegister(){
    this.showService.choseShow = "showRegister";
  }*/

  selected(person:Person){
    this.selectedPerson = person;
  }

  ngOnInit(): void {
  }

}
