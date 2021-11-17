import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-listepresent',
  templateUrl: './listepresent.component.html',
  styleUrls: ['./listepresent.component.scss']
})
export class ListepresentComponent implements OnInit {
  lista: any;

  constructor(private servi: UserService) { }

  ngOnInit(): void {

  }
  affichlisdate(datalist: NgForm){
    this.servi.listeprsnt(datalist.value.da).subscribe(data => {
      this.lista = data;
      console.log(this.lista);
      //console.log(datalist.value.da);
    });
  }

}
