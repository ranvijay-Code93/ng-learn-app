import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { GuestPageNotFoundComponent } from './guest-page-not-found/guest-page-not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    GuestPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
