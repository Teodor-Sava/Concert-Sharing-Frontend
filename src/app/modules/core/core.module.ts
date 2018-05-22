import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import {CoreService} from './services/core.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NotificationsComponent],
    providers: [CoreService]
})
export class CoreModule {
}
