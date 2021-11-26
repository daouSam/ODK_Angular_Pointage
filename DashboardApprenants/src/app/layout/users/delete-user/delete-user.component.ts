import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  userId: any;
  utiliDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  Loadeddata: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servi: UserService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }


  ngOnInit(): void {
    this.Loadeddata= false;
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if(this.userId !== ''){
      //recuperer utilisateur par id
      this.servi.voirutili(this.userId).toPromise().then(data => {
        this.utiliDetails = data;
        //Object.assign(this.utiliDetails, data);
        //console.log(this.utiliDetails);
        //form builder
        this.editUserForm = this.formBuilder.group({
          'nom': new FormControl(this.utiliDetails.nom),
          'prenom': new FormControl(this.utiliDetails.prenom),
          'age': new FormControl(this.utiliDetails.age),
          'telephone': new FormControl(this.utiliDetails.telephone),
          'email': new FormControl(this.utiliDetails.email),
          'login': new FormControl(this.utiliDetails.login),
          'password': new FormControl(this.utiliDetails.password),
          // 'genree': new FormControl(this.utiliDetails.genre),
          'userStatus': new FormControl(this.utiliDetails.userStatus),
          'profil':new FormControl(this.utiliDetails.profil)
        })
        this.Loadeddata = true;
      }).catch(err => {
        console.log(err);
      });
    }
  }
  modifieutili(){
      this.servi.modifieutili(this.userId, this.editUserForm.value).subscribe(d => {
      });
      this.snackBar.open('Utilisateur modifier avec succès', 'ok', {
        duration: 4000
      });
     this.router.navigateByUrl('users/ajout');

  }

}
