import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerList : Person [] = [];
  
  constructor() { }

  registerService(person:Person) : boolean{
    if(person.name && person.age != 0 && person.image){
      this.registerList?.push(person);
      return true;
    }
    
    return false;
  }

}
