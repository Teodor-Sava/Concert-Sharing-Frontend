import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyBandsComponent} from '../admin/my-bands/my-bands.component';
import {MyConcertsComponent} from '../admin/my-concerts/my-concerts.component';
import {MySpacesComponent} from '../admin/my-spaces/my-spaces.component';
import {OverviewComponent} from '../admin/overview/overview.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
    {
        path: 'id/:id',
        component: UserProfileComponent
    },
    {
        path: 'my-profile',
        component: MyProfileComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
