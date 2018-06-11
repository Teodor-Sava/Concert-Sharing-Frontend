import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service';
import {CoreService} from '../../../core/services/core.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    selectedFile: File = null;

    constructor(private bandsService: BandsService,
                private coreService: CoreService,
                private fb: FormBuilder,
                private notificationService: NotificationService,
                private router: Router,
                private cd: ChangeDetectorRef) {
        this.createForm();
    }

    ngOnInit() {
        this.getCountries();
        this.getGenres();
    }

    createForm() {
        this.bandForm = this.fb.group({
            name: new FormControl('', [Validators.required, Validators.min(3)]),
            no_members: new FormControl('', Validators.required),
            country_id: new FormControl('', Validators.required),
            founded_at: new FormControl('', Validators.required),
            image: [null, Validators.required],
            short_description: new FormControl('', Validators.required),
            long_description: new FormControl('', Validators.required),
            band_requests: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
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
        for (const event of events) {
            genreValues.push(event.id);
        }
        this.bandForm.controls['genres'].setValue(genreValues);

    }

    setCountryFormControl(event) {
        this.bandForm.controls['country_id'].setValue(event);
    }

    onFileSelected(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.bandForm.patchValue({
                    image: reader.result
                });

                this.cd.markForCheck();
            };
        }
    }

    onSubmit(formGroup) {
        if (this.bandForm.valid && formGroup['image']) {
            this.bandsService.createBand(formGroup).subscribe(response => {
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
