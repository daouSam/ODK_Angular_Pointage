import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  listUsers: any;

  lisuta: any;

  apnnt ="Apprenant";

  constructor(private servi: UserService) { }

  ngOnInit(): void {
    // this.servi.listUser().subscribe(data => {
    //   this.listUsers = data;
    // });

    this.servi.listapprenant(this.apnnt).subscribe(datautt => {
      this.lisuta = datautt;
    });
  }
}
