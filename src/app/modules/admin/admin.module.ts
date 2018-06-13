import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MyBandsComponent} from './my-bands/my-bands.component';
import {MyConcertsComponent} from './my-concerts/my-concerts.component';
import {MySpacesComponent} from './my-spaces/my-spaces.component';
import {OverviewComponent} from './overview/overview.component';
import {AdminService} from './services/admin.service';
import { BandRequestsComponent } from './band-requests/band-requests.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [OverviewComponent, MyBandsComponent, MyConcertsComponent, MySpacesComponent, BandRequestsComponent],
    providers: [AdminService]
})

export class AdminModule {
}
