import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';


import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UsersService} from './services/users.service';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {SettingsComponent} from './settings/settings.component';
import {EditMyProfileComponent} from './edit-my-profile/edit-my-profile.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [ UserProfileComponent, MyProfileComponent, SettingsComponent, EditMyProfileComponent],
    providers: [UsersService]
})
export class UserModule {
}
