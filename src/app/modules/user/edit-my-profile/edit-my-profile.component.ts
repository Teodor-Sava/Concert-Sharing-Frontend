import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core/services/core.service';
import {UsersService} from '../services/users.service';

@Component({
    selector: 'app-edit-my-profile',
    templateUrl: './edit-my-profile.component.html',
    styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {
    myProfileForm: FormGroup;
    countries;

    constructor(private fb: FormBuilder, private coreService: CoreService, private usersService: UsersService) {
        this.createForm();
    }

    createForm() {
        this.myProfile = this.fb.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            country_id: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
        this.getCountries();
    }

    getUserDetails() {
        this.usersService.getUserProfile();
    }

    getCountries() {
        this.coreService.getCountries().subscribe(response => {
            this.countries = response.data;
        });
    }

    setCountryFormControl(event) {
        this.myProfileForm.controls['country_id'].setValue(event);
    }
}
