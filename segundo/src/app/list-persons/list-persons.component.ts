import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  listPersons : Person[] = this.regService.registerList;
  
  selectedPerson : Person;

  newPerson : Person = {
    name:"",
    age:0,
    image:""
  }

  constructor(private regService : RegisterService) { }

  selected(person:Person){
    this.selectedPerson = person;
  }

  ngOnInit(): void {
  }

}
