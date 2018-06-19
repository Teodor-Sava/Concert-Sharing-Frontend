import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationType} from '../../core/models/notification';
import {NotificationService} from '../../core/services/notification.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-create-space-request',
    templateUrl: './create-space-request.component.html',
    styleUrls: ['./create-space-request.component.scss']
})
export class CreateSpaceRequestComponent implements OnInit {

    bandRequestForm: FormGroup;
    selectedBand;
    @Input() id: number;
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
            space_id: new FormControl('', Validators.required),
            request_message: new FormControl('', Validators.required)
        });
    }

    setFormSpace(event) {
        this.selectedBand = event;
        this.bandRequestForm.controls['space_id'].setValue(event.id);
        this.bandRequestForm.controls['concert_id'].setValue(this.id);
        console.log(this.bandRequestForm.value);
    }

    onSubmit(values) {
        console.log(values);
        console.log(this.bandRequestForm);
        if (this.bandRequestForm.valid) {
            this.adminService.createSpaceRequest(values).subscribe(response => {
                if (response) {
                    this.notificationService.setNotification('A request has been sent to the space admin', NotificationType.SUCCESS);
                    this.formSubmitted.next(true);
                    this.selectedBand = null;
                    this.bandRequestForm.reset();
                }
            });
        }

    }
}
