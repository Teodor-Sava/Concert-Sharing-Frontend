import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConcertsRoutingModule} from './concerts-routing.module';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {ConcertsService} from './services/concerts.service';

@NgModule({
    imports: [
        CommonModule,
        ConcertsRoutingModule
    ],
    declarations: [ConcertsComponent],
    providers: [ConcertsService]
})
export class ConcertsModule {
}
