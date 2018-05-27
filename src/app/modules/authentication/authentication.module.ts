import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        CoreModule
    ],
    declarations: [LoginComponent, RegisterComponent],
    providers: [AuthenticationService]
})
export class AuthenticationModule {
}
