import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerList : Person [] = [];
  
  constructor() { }

  checkNewPerson(person: Person) : boolean {
    for(let p of this.registerList){
      if(p.name == person.name) {
        return false;
      }
    }
    return true;
  }


  registerService(person:Person) : boolean{
    if(person.name && person.age != 0 && person.image && this.checkNewPerson(person)){
      this.registerList?.push(person);
      return true;
    }  
    return false;
  }

}
