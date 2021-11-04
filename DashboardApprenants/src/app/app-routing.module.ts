import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutUserComponent } from './layout/users/ajout-user/ajout-user.component';
import { DeleteUserComponent } from './layout/users/delete-user/delete-user.component';
import { EditUserComponent } from './layout/users/edit-user/edit-user.component';
import { ListeUserComponent } from './layout/users/liste-user/liste-user.component';
import { ViewUserComponent } from './layout/users/view-user/view-user.component';

const routes: Routes = [
  {path:'users',
    children: [
      {path:'ajout/:id', component: AjoutUserComponent},
      {path:'ajout', component: AjoutUserComponent},
      {path:'listuser', component: ListeUserComponent},
      {path:'edituser/:id', component: EditUserComponent},
      {path:'deleteuser/:id', component: DeleteUserComponent},
      {path:'viewuser/:id', component: ViewUserComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
