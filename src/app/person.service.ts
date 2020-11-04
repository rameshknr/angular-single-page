import { Injectable } from '@angular/core';
import { person } from './person/person';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = 'http://localhost:3000/person/'
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public id:number;

  public persons: Array<person> = [ ]
  constructor(public httpClient: HttpClient) { }
  
  addPerson(person: person){
    return this.httpClient.post(baseUrl,person )
  }

  setPersonId(index:number){
    this.id = index;
  }
  getPersonId(){
    return this.id
  }

  deletePerson(index: number){
    return this.httpClient.delete(baseUrl + index)
  }
  editPerson(index:number,person: person){
    let endPoints = index
    return this.httpClient.put(baseUrl + endPoints, person)
  }

  fetchAllPersons(){
    return this.httpClient.get(baseUrl);
  }


}
