import {TestBed, inject} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {HttpClient} from '@angular/common/http';

describe('AuthenticationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthenticationService, {provide: HttpClient}]
        });
    });

    it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service).toBeTruthy();
    }));
});
