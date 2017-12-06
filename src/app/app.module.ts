import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CountriesComponent} from './countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {BlockUIModule} from 'ng-block-ui';
import {CountryService} from './services/country.service';
import {NavbarComponent} from './navbar/navbar.component';
import {CountryViewComponent} from './country-view/country-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavbarComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlockUIModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CountriesComponent
      },
      {
        path: 'country',
        component: CountryViewComponent
      }
    ])

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
