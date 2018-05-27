import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationStatusService} from '../../core/services/authentication-status.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthenticationService,
                private router: Router,
                private fb: FormBuilder,
                private authStatusService: AuthenticationStatusService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit(credentials: { email: string, password: string }) {
        console.log(credentials);
        this.authService.login(credentials).subscribe(response => {
                if (response) {
                    this.authStatusService.setLocalStorageToken(response.access_token);
                    this.router.navigate(['./']);
                }
            },
            (error: HttpErrorResponse) => {

            });
    }
}
