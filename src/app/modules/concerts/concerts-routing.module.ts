import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConcertsComponent} from './components/concerts/concerts.component';

const routes: Routes = [
    {
        path: '',
        component: ConcertsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConcertsRoutingModule {
}
