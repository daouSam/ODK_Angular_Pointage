import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

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
    private formBuilder: FormBuilder) { }


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
          'nomm': new FormControl(this.utiliDetails.nom),
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
    this.servi.modifieutili(JSON.parse(this.userId), JSON.parse(this.editUserForm.value)).subscribe(data => {
    });
    // console.log(JSON.stringify(JSON.parse(this.editUserForm.value)));
    //console.log(this.userId);
  }

}
