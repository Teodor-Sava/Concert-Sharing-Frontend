import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {CoreService} from './services/core.service';
import {NotificationService} from './services/notification.service';
import {DisplayFieldErrorsComponent} from './components/display-field-errors/display-field-errors.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NotificationsComponent, DisplayFieldErrorsComponent],
    exports: [NotificationsComponent, DisplayFieldErrorsComponent],
    providers: [CoreService, NotificationService]
})
export class CoreModule {
}
