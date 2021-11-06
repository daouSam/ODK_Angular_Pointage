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
  editUserForm: FormGroup = new FormGroup({});

  constructor(private servi: UserService) { }

  ngOnInit(): void {
    this.servi.listapprenant(this.apnnt).subscribe(datautt => {
      this.lisuta = datautt;
    });
  }
  modifieutili(){

  }

}
