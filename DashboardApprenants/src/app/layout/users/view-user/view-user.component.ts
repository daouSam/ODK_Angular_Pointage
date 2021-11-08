import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId: any;
  profile_user: any;


  constructor(private activatedRoute: ActivatedRoute,private servi: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
      this.servi.voirutili(this.userId).subscribe(data =>{
        this.profile_user = data;
      });
    });


  }

}
