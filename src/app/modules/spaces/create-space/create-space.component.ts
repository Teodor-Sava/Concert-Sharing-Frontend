import {Component, OnInit} from '@angular/core';
import {NotificationType} from '../../core/models/notification';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpacesService} from '../services/spaces.service';
import {NotificationService} from '../../core/services/notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-space',
    templateUrl: './create-space.component.html',
    styleUrls: ['./create-space.component.scss']
})
export class CreateSpaceComponent implements OnInit {
    spaceForm: FormGroup;

    constructor(private fb: FormBuilder,
                private spaceService: SpacesService,
                public notificationService: NotificationService,
                private router: Router) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.spaceForm = this.fb.group({
            name: new FormControl('', [Validators.required, Validators.min(3)]),
            description: new FormControl('', Validators.required),
            lng: new FormControl(12.568337, Validators.required),
            lat: new FormControl(55.676098, Validators.required),
        });
    }

    setCoordinates(events) {
        this.spaceForm.controls['lat'].setValue(events.coords.lat);
        this.spaceForm.controls['lng'].setValue(events.coords.lng);
    }

    onSubmit(formGroup) {
        if (this.spaceForm.valid) {
            this.spaceService.createSpace(formGroup).subscribe(response => {
                    if (response) {
                        this.notificationService.setNotification('Band was created', NotificationType.SUCCESS);
                        this.router.navigate([`./admin/spaces/id/${response.id}/requests`]);
                    }
                },
                error2 => {
                    this.notificationService.setNotification(error2.error, NotificationType.ERROR);
                });

        }

    }
}
