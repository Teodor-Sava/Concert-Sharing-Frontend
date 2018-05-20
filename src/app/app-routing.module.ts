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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
