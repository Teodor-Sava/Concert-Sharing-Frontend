import {Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service';
import {CoreService} from '../../../core/services/core.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-create-band',
    templateUrl: './create-band.component.html',
    styleUrls: ['./create-band.component.scss']
})
export class CreateBandComponent implements OnInit {
    cities2 = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys'},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];
    bandForm: FormGroup;

    constructor(private bandsService: BandsService, private coreService: CoreService, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.coreService.getCountries().subscribe(response => {
            console.log(response);
        });
        this.coreService.getGenres().subscribe(response => {
            console.log(response);
        });
    }

    createForm() {
        this.bandForm = this.fb.group({
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
}
