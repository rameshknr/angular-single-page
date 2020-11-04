import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  deletePerson(index: number){
    this.personService.deletePerson(index)
    .subscribe(res => res)
    this.ngOnInit()
  }
  addButton(){
    this.router.navigate(['add']);
  }

  setPersonId(index:number){
    this.personService.setPersonId(index);
  }
  constructor(public personService:PersonService, private router: Router) { }

  ngOnInit(): void {
    this.personService.fetchAllPersons()
    .subscribe((res:any)=>
      {
        this.personService.persons = res;
      })
  }

}
