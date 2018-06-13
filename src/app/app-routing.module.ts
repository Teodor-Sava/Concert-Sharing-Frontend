import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'concerts',
        loadChildren: 'app/modules/concerts/concerts.module#ConcertsModule'
    },
    {
        path: 'bands',
        loadChildren: 'app/modules/bands/bands.module#BandsModule'
    },
    {
        path: 'users',
        loadChildren: 'app/modules/user/user.module#UserModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/modules/admin/admin.module#AdminModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
