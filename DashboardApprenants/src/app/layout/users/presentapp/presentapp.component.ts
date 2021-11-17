import { User } from './../../../user.model';
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
  users_id = new User()
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
      this.userd = {"users": this.don};
      //console.log(this.userd);
      this.servi.ajoutpresent(this.userd);
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

