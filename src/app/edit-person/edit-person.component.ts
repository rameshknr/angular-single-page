import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { person } from '../person/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person: person;

  editPerson(name: string,age: number,contact: number,email: string){   
    const index:number = this.personService.getPersonId();
    this.personService.editPerson(index,{name,age,contact,email})
    .subscribe(res=> res)
    this.ngOnInit()
    this.router.navigate(['']);
  }

  returnHome(){
    this.router.navigate(['']);
  }

  constructor(public personService:PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personService.fetchAllPersons()
    .subscribe((res:any)=>
      {
        this.personService.persons = res;
      })

    this.route.paramMap.subscribe(params => {
      let perName = params.get('name');
      let filteredList = this.personService.persons.filter(per => per.name == perName);
      this.person = filteredList[0];
    });

  }

}
