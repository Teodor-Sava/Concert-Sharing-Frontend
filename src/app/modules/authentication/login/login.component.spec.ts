import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: jasmine.SpyObj<AuthenticationService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [LoginComponent],
            providers: [{provide: AuthenticationService, useValue: authService}, FormBuilder]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call onSubmit when submitted', () => {
        const spy = spyOn(component, 'onSubmit');


        let form = fixture.debugElement.query(By.css('form'));
        form.triggerEventHandler('submit', null);
        fixture.detectChanges();

        expect(component.onSubmit()).toHaveBeenCalled();
        expect(authService.register).toHaveBeenCalled();
        expect(comp.registered).toBeTruthy('user registered');
    })
});
