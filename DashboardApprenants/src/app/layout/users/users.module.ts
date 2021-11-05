import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { ListformaComponent } from './listforma/listforma.component';




@NgModule({
  declarations: [
    AjoutUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListeUserComponent,
    ViewUserComponent,
    ListformaComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    FormsModule

  ]
})
export class UsersModule { }
