import { Routes } from "@angular/router";
import { RootComponent } from "../root/root.component";
import { UserListComponent } from "../root/user-list/user-list.component";
import { UserDetailComponent } from "../root/user-detail/user-detail.component";

export const dashboardRoutes: Routes = [
    {path: '', component: RootComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'user-detail', component: UserDetailComponent}, 
] 