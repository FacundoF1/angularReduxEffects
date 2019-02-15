import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './root.component';
import { DashboardRoutingModule } from '../dashboard/dashboard.routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [ 
    RootComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
    DashboardComponent,
    RootComponent,
    UserListComponent,
    UserDetailComponent
  ]
})
export class RootModule { }
