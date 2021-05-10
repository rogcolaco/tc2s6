import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {

  @Input() personSelected: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
