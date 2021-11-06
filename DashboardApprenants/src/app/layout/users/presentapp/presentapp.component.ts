import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-presentapp',
  templateUrl: './presentapp.component.html',
  styleUrls: ['./presentapp.component.scss']
})
export class PresentappComponent implements OnInit {
  apnnt: string = 'Apprenant';
  lisuta: any;
  userd: any;
  usersam: any = '';
  present: FormGroup = new FormGroup({});
  displayedColumns: string[] = ['prenom', 'nom', 'telephone', 'email', 'selet'];
  don: any;
  userdd: any;


  constructor(private servi: UserService) { }

  ngOnInit(): void {
    this.servi.listapprenant(this.apnnt).subscribe(datautt => {
      this.lisuta = datautt;
      //console.log(this.lisuta);
    });
  }
  modifieutili(){

  }

  public prsnt(ut: any){
    //console.log(ut);
    //ajoutpresent
    const dodo = this.servi.voirutili(ut).subscribe(data => {
      this.don = data;
      this.userd = {"users_id": this.don.id};
      //this.userdd = {"users": this.userd};
      console.log(JSON.stringify(this.userd));
      this.servi.ajoutpresent(JSON.stringify(this.userd));
    });

  }

}
export interface PeriodicElement {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

export interface PeriodicElement {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
}
