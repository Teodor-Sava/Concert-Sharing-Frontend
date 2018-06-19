import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConcertsService} from '../../services/concerts.service';
import {NotificationService} from '../../../core/services/notification.service';
import {NotificationType} from '../../../core/models/notification';

@Component({
    selector: 'app-concert-reviews',
    templateUrl: './concert-reviews.component.html',
    styleUrls: ['./concert-reviews.component.scss']
})
export class ConcertReviewsComponent implements OnInit {
    reviewForm: FormGroup;
    @Input() concert;
    @Output() hideForm = new EventEmitter();

    constructor(private concertsService: ConcertsService,
                private fb: FormBuilder,
                public notificationService: NotificationService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.reviewForm = this.fb.group({
            title: '',
            message: ''
        });
    }

    onSubmit(formGroup) {
        if (this.reviewForm.valid) {
            this.concertsService.createReview(this.concert.id, formGroup).subscribe(response => {
                    if (response) {
                        this.notificationService.setNotification(response.message, NotificationType.SUCCESS);
                        this.hideForm.emit(response.review);
                    } else {
                        this.notificationService.setNotification(response.message, NotificationType.ERROR);
                    }
                }
            );
        }
    }
}
