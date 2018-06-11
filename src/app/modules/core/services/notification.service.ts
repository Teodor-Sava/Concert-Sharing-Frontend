import {Injectable} from '@angular/core';
import {Notification, NotificationType} from '../models/notification';

@Injectable()
export class NotificationService {
    public notification: Notification;

    constructor() {
        this.notification = new Notification();
        console.log('this.notification');
    }

    public setNotification(message: string, type: NotificationType) {
        this.notification.message = message;
        this.notification.type = type;
        this.notification.state = true;

        setTimeout(() => {
            this.notification.state = false;
        }, 2500);
    }
}
