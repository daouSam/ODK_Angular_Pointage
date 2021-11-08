import { ListepresentComponent } from './layout/users/listepresent/listepresent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutUserComponent } from './layout/users/ajout-user/ajout-user.component';
import { DeleteUserComponent } from './layout/users/delete-user/delete-user.component';
import { EditUserComponent } from './layout/users/edit-user/edit-user.component';
import { ListeUserComponent } from './layout/users/liste-user/liste-user.component';
import { ListformaComponent } from './layout/users/listforma/listforma.component';
import { PresentappComponent } from './layout/users/presentapp/presentapp.component';
import { ViewUserComponent } from './layout/users/view-user/view-user.component';

const routes: Routes = [
  {path:'users',
    children: [
      {path:'ajout/:id', component: AjoutUserComponent},
      {path:'ajout', component: AjoutUserComponent},
      {path:'listuser', component: ListeUserComponent},
      {path:'edituser/:id', component: EditUserComponent},
      {path:'deleteuser/:id', component: DeleteUserComponent},
      {path:'viewuser/:id', component: ViewUserComponent},
      {path:'listforma', component: ListformaComponent},
      {path:'listpresent', component: PresentappComponent},
      {path:'listpresence', component: ListepresentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
