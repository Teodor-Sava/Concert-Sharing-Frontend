import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';

const routes: Routes = [
    {
        path: '',
        component: ConcertsComponent
    },
    {
        path: 'id/:id',
        component: ConcertDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConcertsRoutingModule {
}
