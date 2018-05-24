import {Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service';
import {CoreService} from '../../../core/services/core.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Band} from '../../../core/models/data-models';
import {NotificationService} from '../../../core/services/notification.service';
import {NotificationType} from '../../../core/models/notification';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-create-band',
    templateUrl: './create-band.component.html',
    styleUrls: ['./create-band.component.scss']
})
export class CreateBandComponent implements OnInit {
    countries;
    genres;
    bandForm: FormGroup;
    errorMessages: Array<string>;

    constructor(private bandsService: BandsService,
                private coreService: CoreService,
                private fb: FormBuilder,
                private notificationService: NotificationService,
                private router: Router) {
        this.createForm();
    }

    ngOnInit() {
        this.getCountries();
        this.getGenres();
    }

    createForm() {
        this.bandForm = this.fb.group({
            name: new FormControl('', [Validators.required, Validators.min(3)]),
            image_url: new FormControl('', Validators.required),
            no_members: new FormControl('', Validators.required),
            country_id: new FormControl('', Validators.required),
            founded_at: new FormControl('', Validators.required),
            short_description: new FormControl('', Validators.required),
            long_description: new FormControl('', Validators.required),
            band_requests: new FormControl('', Validators.required),
            band_price: new FormControl('', Validators.required),
            genres: new FormControl([], Validators.required),
        });
    }

    getCountries() {
        this.coreService.getCountries().subscribe(response => {
            this.countries = response.data;
        });
    }

    getGenres() {
        this.coreService.getGenres().subscribe(response => {
            this.genres = response.data;
        });
    }

    isFieldInvalid(field) {
        return this.bandForm.get(field).invalid && (this.bandForm.get(field).touched || this.bandForm.get(field).dirty);
    }

    setGenreFormControl(events) {
        const genreValues = [];
        console.log(event);
        for (const event of events) {
            genreValues.push(event.id);
        }
        this.bandForm.controls['genres'].setValue(genreValues);

        console.log(this.bandForm.controls['genres']);

    }

    setCountryFormControl(event) {
        console.log(event);
        this.bandForm.controls['country_id'].setValue(event);
    }

    onSubmit(formGroup) {
        console.log(this.bandForm);
        if (this.bandForm.valid) {
            console.log('valid');
            this.bandsService.createBand(formGroup.value).subscribe(response => {
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
