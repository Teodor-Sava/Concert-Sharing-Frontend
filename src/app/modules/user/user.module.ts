import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {MyBandsComponent} from '../admin/my-bands/my-bands.component';
import {MyConcertsComponent} from '../admin/my-concerts/my-concerts.component';
import {MySpacesComponent} from '../admin/my-spaces/my-spaces.component';
import {OverviewComponent} from '../admin/overview/overview.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UsersService} from './services/users.service';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [MyBandsComponent, MyConcertsComponent, MySpacesComponent, OverviewComponent, UserProfileComponent, MyProfileComponent],
    providers: [UsersService]
})
export class UserModule {
}
