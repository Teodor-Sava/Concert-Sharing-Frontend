import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MyBandsComponent} from './my-bands/my-bands.component';
import {MyConcertsComponent} from './my-concerts/my-concerts.component';
import {MySpacesComponent} from './my-spaces/my-spaces.component';
import {OverviewComponent} from './overview/overview.component';
import {AdminService} from './services/admin.service';
import {BandRequestsComponent} from './band-requests/band-requests.component';
import {ConcertRequestsComponent} from './concert-requests/concert-requests.component';
import {CreateConcertRequestsComponent} from './create-concert-requests/create-concert-requests.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD_1swczT2E2f-DZIdjku_BCTMLjdZr04o'
        })
    ],
    declarations: [OverviewComponent, MyBandsComponent, MyConcertsComponent, MySpacesComponent, BandRequestsComponent, ConcertRequestsComponent, CreateConcertRequestsComponent],
    providers: [AdminService]
})

export class AdminModule {
}
