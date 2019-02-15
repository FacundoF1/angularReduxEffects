import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: './root/root.module#RootModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes, { useHash: false } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}