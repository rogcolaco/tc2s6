import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  listPersons : Person[] = [];

  constructor(private regService : RegisterService) { }

  loadList(){
    this.listPersons = this.regService.registerList;
    console.log(this.listPersons);
  }

  ngOnInit(): void {
    this.loadList();
  }

}
