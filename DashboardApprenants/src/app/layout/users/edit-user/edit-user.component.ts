import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }

  ngOnInit(): void {
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

}
