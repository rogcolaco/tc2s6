import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import { listPerson } from '../listPerson'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {

  listPerson : Person [] = listPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
