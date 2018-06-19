import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
                private router: Router,
                private cd: ChangeDetectorRef) {
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
            long_description: new FormControl('', Validators.required),
            poster_url: [null, Validators.required]
        });
    }

    isFieldInvalid(field) {
        return this.concertForm.get(field).invalid && (this.concertForm.get(field).touched || this.concertForm.get(field).dirty);
    }


    onFileSelected(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.concertForm.patchValue({
                    poster_url: reader.result
                });

                this.cd.markForCheck();
            };
        }
    }

    onSubmit(formGroup) {
        console.log(this.concertForm);
        if (this.concertForm.valid && formGroup['poster_url']) {
            this.concertsService.createConcert(formGroup).subscribe(response => {
                if (response) {
                    this.notificationService.setNotification('Concert was created', NotificationType.SUCCESS);
                    this.router.navigate([`./admin/concerts/id/${response.id}/requests`]);
                } else {
                    this.errorMessages = response.errors;
                }
            });

        }

    }

}
