import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
