import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyBandsComponent} from '../admin/my-bands/my-bands.component';
import {MyConcertsComponent} from '../admin/my-concerts/my-concerts.component';
import {MySpacesComponent} from '../admin/my-spaces/my-spaces.component';
import {OverviewComponent} from '../admin/overview/overview.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'my-bands',
        component: MyBandsComponent
    },
    {
        path: 'my-concerts',
        component: MyConcertsComponent
    },
    {
        path: 'my-spaces',
        component: MySpacesComponent
    },
    {
        path: 'id/:id',
        component: UserProfileComponent
    },
    {
        path:'my-profile',
        component: Us
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
