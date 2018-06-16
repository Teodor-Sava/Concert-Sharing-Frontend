import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../core/services/notification.service';
import {Band} from '../../core/models/data-models';
import {NotificationType} from '../../core/models/notification';

@Component({
    selector: 'app-create-concert-requests',
    templateUrl: './create-concert-requests.component.html',
    styleUrls: ['./create-concert-requests.component.scss']
})
export class CreateConcertRequestsComponent implements OnInit {
    bandRequestForm: FormGroup;
    @Input() requestType: string;
    @Output() formSubmitted = new EventEmitter<boolean>();

    constructor(private adminService: AdminService,
                private fb: FormBuilder,
                public notificationService: NotificationService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.bandRequestForm = this.fb.group({
            concert_id: new FormControl('', Validators.required),
            band_id: new FormControl('', Validators.required),
            request_message: new FormControl('', Validators.required)
        });
    }

    setFormBand(id: number) {
        this.bandRequestForm.controls['band_id'].setValue(id);
        console.log(this.bandRequestForm.value);
    }

    onSubmit(values) {
        if (this.bandRequestForm.valid) {
            this.adminService.createBandRequest(values).subscribe(response => {
                if (response) {
                    this.notificationService.setNotification('A request has been sent to the band', NotificationType.SUCCESS);
                    this.formSubmitted.next(true);
                }
            });
        }

    }
}
