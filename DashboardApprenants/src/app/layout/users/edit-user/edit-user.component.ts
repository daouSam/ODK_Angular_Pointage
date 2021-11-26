import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private servi: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if(this.userId){
      if(
        this.servi.suppUser(this.userId).subscribe(data => {
          //console.log("success success !");
        },error => {
          //console.log("erreur erreur");
        })
        ){
          this.snackBar.open('suppression effectuer avec succès', 'ok', {
            duration: 4000
          });
          //this.router.navigateByUrl('users/ajout');
      }
    }
  }

}
