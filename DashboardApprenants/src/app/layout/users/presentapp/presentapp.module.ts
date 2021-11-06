import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AujourdhuiComponent } from './aujourdhui/aujourdhui.component';



@NgModule({
  declarations: [
    AujourdhuiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'aujourdhui', component: AujourdhuiComponent}
  ])
  ]
})
export class PresentappModule { }
