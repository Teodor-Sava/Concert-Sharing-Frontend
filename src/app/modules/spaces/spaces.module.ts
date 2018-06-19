import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpacesRoutingModule} from './spaces-routing.module';
import {SpacesComponent} from './spaces/spaces.component';
import {SpacesDetailsComponent} from './spaces-details/spaces-details.component';
import {CreateSpaceComponent} from './create-space/create-space.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {SpacesService} from './services/spaces.service';
import {AgmCoreModule} from '@agm/core';
import * as Keys from '../core/constants/api.keys';

@NgModule({
    imports: [
        CommonModule,
        SpacesRoutingModule,
        InfiniteScrollModule,
        SharedModule,
        NgSelectModule,
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: Keys.mapsKey
        })
    ],
    declarations: [SpacesComponent, SpacesDetailsComponent, CreateSpaceComponent],
    providers: [SpacesService]
})
export class SpacesModule {
}
