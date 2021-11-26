import { User } from './../../../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(private servi: UserService,private snackBar: MatSnackBar,) { }

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
      if(this.userd != ''){
        this.servi.ajoutpresent(this.userd);
        this.snackBar.open('apprenant ajouter à la liste de avec succès', 'ok', {
          duration: 2000
        });
      }
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

