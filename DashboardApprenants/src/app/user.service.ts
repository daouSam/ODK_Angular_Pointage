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
  voirutili(id: string){
    return this.http.get(this.apiUrl + '/user/get/' +id);
  }
  modifieutili(id: any, userObj: any){
    return this.http.put(this.apiUrl + '/user/update/'+id,userObj);
  }
  suppUser(id: any){
    return this.http.delete(this.apiUrl+'/user/delete/'+id);
  }
  listformateur(profil: any){
    return this.http.get(this.apiUrl+'/users/'+profil);
  }
  listapprenant(profil: any){
    return this.http.get(this.apiUrl+'/users/'+profil);
  }
  ajoutpresent(press: any){
    this.http.post(this.apiUrl+'/presence/add', press).subscribe(data =>{
      console.log('success ........!');
    });
  }

}
