import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './modules/core/components/header/header.component';
import {CoreModule} from './modules/core/core.module';
import {TokenApiInterceptor} from './modules/core/interceptors/tokenApi.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenApiInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
