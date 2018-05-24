import {Component, OnInit} from '@angular/core';
import {Notification, NotificationType} from '../../models/notification';
import {NotificationService} from '../../services/notification.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    constructor(public notificationService: NotificationService) {
    }

    notificationCssClass(notification: Notification) {
        switch (notification.type) {
            case NotificationType.SUCCESS : {
                return 'alert alert-success';
            }
            case NotificationType.ERROR : {
                return 'alert alert-danger';
            }
            case NotificationType.WARNING : {
                return 'alert alert-warning';
            }
            case NotificationType.INFO : {
                return 'alert alert-info';
            }
        }
    }

    ngOnInit() {
    }
}
