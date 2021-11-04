import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl= 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  listUser(){
    return this.http.get(this.apiUrl+'/users/all');
  }
  ajout(donnee: any){
    return this.http.post(this.apiUrl+'/users/save', donnee);
  }
  modifierUser(){
    return this.http.get(this.apiUrl+'/save');
  }
  suppUser(id: any){
    return this.http.delete(this.apiUrl+'/user/delete/'+id);
  }
}
