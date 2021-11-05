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
  ajout(kelly: any){
    return this.http.post(this.apiUrl+'/user/save', kelly);
    //console.log(kelly);
  }
  modifierUser(){
    return this.http.get(this.apiUrl+'/save');
  }
  suppUser(id: any){
    return this.http.delete(this.apiUrl+'/user/delete/'+id);
  }
  listformateur(profil: any){
    return this.http.get(this.apiUrl+'/users/'+profil);
  }
  listapprenant(profill: any){
    return this.http.get(this.apiUrl+'/users/'+profill);
  }

}
