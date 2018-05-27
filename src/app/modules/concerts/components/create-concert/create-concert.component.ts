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
            image_url: new FormControl('', Validators.required),
            no_members: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            founded_at: new FormControl('', Validators.required),
            short_description: new FormControl('', Validators.required),
            long_description: new FormControl('', Validators.required),
            band_requests: new FormControl('', Validators.required),
            band_price: new FormControl('', Validators.required),
            genres: new FormControl('', Validators.required),
        });
    }

    // getCountries() {
    //     this.coreService.getCountries().subscribe(response => {
    //         this.countries = response.data;
    //     });
    // }
    //
    // getGenres() {
    //     this.coreService.getGenres().subscribe(response => {
    //         this.genres = response.data;
    //     });
    // }

    isFieldInvalid(field) {
        return this.concertForm.get(field).invalid && (this.concertForm.get(field).touched || this.concertForm.get(field).dirty);
    }

    setGenreFormControl(events) {
        const genreValues = [];
        console.log(event);
        for (const event of events) {
            genreValues.push(event.id);
        }
        this.concertForm.controls['genres'].setValue(genreValues);

        console.log(this.concertForm.controls['genres']);

    }

    setCountryFormControl(event) {
        console.log(event);
        this.concertForm.controls['country_id'].setValue(event);
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
