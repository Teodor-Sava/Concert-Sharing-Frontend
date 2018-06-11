import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {AuthenticationStatusService} from '../../core/services/authentication-status.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;


    constructor(private authService: AuthenticationService,
                private authStatusService: AuthenticationStatusService,
                private router: Router,
                private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    onRegister(credentials) {
        this.authService.register(credentials).subscribe(response => {
            if (response) {
                console.log(response);
                this.authStatusService.setLocalStorage(response);
                this.router.navigate(['./']);
            }
        });
    }
}
