import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {MySpacesComponent} from './my-spaces/my-spaces.component';
import {MyConcertsComponent} from './my-concerts/my-concerts.component';
import {MyBandsComponent} from './my-bands/my-bands.component';
import {BandRequestsComponent} from './band-requests/band-requests.component';
import {ConcertRequestsComponent} from './concert-requests/concert-requests.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        children: [
            {
                path: 'spaces',
                component: MySpacesComponent
            },
            {
                path: 'concerts',
                component: MyConcertsComponent
            },
            {
                path: 'concerts/id/:id/requests',
                component: ConcertRequestsComponent
            },
            {
                path: 'bands',
                component: MyBandsComponent
            },
            {
                path: 'bands/id/:id/requests',
                component: BandRequestsComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
