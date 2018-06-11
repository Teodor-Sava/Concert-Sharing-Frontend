import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../../core/services/core.service';
import {BandsService} from '../../../bands/services/bands.service';
import {ConcertsService} from '../../services/concerts.service';
import {NotificationType} from '../../../core/models/notification';
import {NotificationService} from '../../../core/services/notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-concert',
    templateUrl: './create-concert.component.html',
    styleUrls: ['./create-concert.component.scss']
})
export class CreateConcertComponent implements OnInit {
    concertForm: FormGroup;
    errorMessages: string;
    selectedFile: File = null;

    constructor(private concertsService: ConcertsService,
                private coreService: CoreService,
                private fb: FormBuilder,
                public notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.concertForm = this.fb.group({
            name: new FormControl('', Validators.required),
            total_tickets: new FormControl('', Validators.required),
            concert_start: new FormControl('', Validators.required),
            short_description: new FormControl('', Validators.required),
            long_description: new FormControl('', Validators.required)
        });
    }

    isFieldInvalid(field) {
        return this.concertForm.get(field).invalid && (this.concertForm.get(field).touched || this.concertForm.get(field).dirty);
    }


    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }

    onSubmit(formGroup) {
        console.log(this.concertForm);
        if (this.concertForm.valid) {
            console.log('valid');
            this.concertsService.createConcert(formGroup.value).subscribe(response => {
                if (response === true) {
                    this.notificationService.setNotification('Band was created', NotificationType.SUCCESS);
                    this.router.navigate(['./bands']);
                } else {
                    this.errorMessages = response.errors;
                }
            });

        }

    }

}
