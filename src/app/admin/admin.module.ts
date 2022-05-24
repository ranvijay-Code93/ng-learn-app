import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdminPageNotFoundComponent } from './admin-page-not-found/admin-page-not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    AdminPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
