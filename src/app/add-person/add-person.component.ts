import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  addPerson(name: string,age: number,contact: number,email: string){
    //this.courseService.courses.push({title,summary});
    this.personService.addPerson({name,age,contact,email})
    .subscribe(res=>res)
    this.ngOnInit()
    this.router.navigate(['']);

  }

  returnHome(){
    this.router.navigate(['']);
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
