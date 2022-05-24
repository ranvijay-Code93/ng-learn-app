import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdminPageNotFoundComponent } from './admin-page-not-found/admin-page-not-found.component';
const routes: Routes = [
  {
    path: '', children: [
      { path: "login", component: LoginComponent },
      { path: "list", component: ListComponent },
      {path: "",redirectTo:"login",pathMatch:'full'},
      {path:"**", component:AdminPageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
