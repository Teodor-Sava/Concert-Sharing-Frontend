import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BandsComponent} from './components/bands/bands.component';
import {BandsDetailsComponent} from './components/bands-details/bands-details.component';
import {CreateBandComponent} from './components/create-band/create-band.component';
import {EditBandComponent} from './components/edit-band/edit-band.component';
import {StatusConcertComponent} from '../concerts/components/status-concert/status-concert.component';

const routes: Routes = [
    {
        path: '',
        component: BandsComponent
    },
    {
        path: 'id/:id',
        component: BandsDetailsComponent
    },
    {
        path: 'new',
        component: CreateBandComponent
    },
    {
        path: 'edit/id/:id',
        component: EditBandComponent
    },
    {
        path: 'status/id/:id',
        component: StatusConcertComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BandsRoutingModule {
}
