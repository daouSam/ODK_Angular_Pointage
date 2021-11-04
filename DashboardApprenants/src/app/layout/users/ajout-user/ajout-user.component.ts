import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, FormsModule } from '@angular/forms';
import { User } from 'src/app/user.model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
//import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  //userData = new FormControl('');
  //registerForm: FormGroup | undefined;
  ajouterUser: FormGroup =  new FormGroup({});
  submitted = false;
  public utilisateur: User = new User;
  listUsers: any;
  //addForm: any;
  userId: string = '';
  lisut: any;

  constructor(
    private servi: UserService,
    private formbuilder: FormsModule,
    private activatedRoute: ActivatedRoute,
    private router: Router) {


  }
  isSubmitted= false;

  ngOnInit(): void {
    //recuperer la liste apprenant
    this.servi.listUser().subscribe(data =>{
      this.listUsers = data;
      //console.log(data);
    });

    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if(this.userId){
      this.servi.suppUser(this.userId).subscribe(data => {
        //console.log("success success !");
        this.router.navigateByUrl('users/ajout');
      },error => {
        //console.log("erreur erreur");
      })
    }
  }
  utililiste(ut: NgForm){
    this.servi.listformateur(ut.value.perso).subscribe(dataut => {
      this.lisut = dataut;
    })
  }


  userSave(addForm: NgForm){
    this.utilisateur.nom= addForm.value.nom;
    this.utilisateur.prenom= addForm.value.prenom;
    this.utilisateur.age= addForm.value.age;
    this.utilisateur.telephone= addForm.value.phone;
    this.utilisateur.email= addForm.value.email;
    this.utilisateur.login= addForm.value.login;
    this.utilisateur.password= addForm.value.passd;
    this.utilisateur.genre= addForm.value.genre;
    this.utilisateur.userStatus= addForm.value.status;
    this.utilisateur.profil= addForm.value.profile;
    console.log(this.utilisateur);
    this.servi.ajout(this.utilisateur).subscribe(data =>{
     // this._snackBar.open("enregistrement effectuer avec succès");
    },error => {
      //this._snackBar.open("echec lors de l'enregistrement");
    });
    addForm.reset();
  }


}

