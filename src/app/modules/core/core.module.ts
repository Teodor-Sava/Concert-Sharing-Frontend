import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {CoreService} from './services/core.service';
import {NotificationService} from './services/notification.service';
import {DisplayFieldErrorsComponent} from '../shared/components/display-field-errors/display-field-errors.component';
import {TokenApiInterceptor} from './interceptors/tokenApi.interceptor';
import {AuthenticationStatusService} from './services/authentication-status.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent],
    providers: [CoreService, NotificationService, TokenApiInterceptor, AuthenticationStatusService]
})
export class CoreModule {
}
