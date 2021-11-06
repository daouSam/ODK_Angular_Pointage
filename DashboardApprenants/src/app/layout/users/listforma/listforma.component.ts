import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-listforma',
  templateUrl: './listforma.component.html',
  styleUrls: ['./listforma.component.scss']
})
export class ListformaComponent implements OnInit {
  perso ="Formateur";
  lisut: any;
  // public userAddList = {
  //   "users": user
  // }
  constructor(private servi: UserService) { }

  ngOnInit(): void {
    this.servi.listformateur(this.perso).subscribe(dataut => {
      this.lisut = dataut;
    });
  }

}
