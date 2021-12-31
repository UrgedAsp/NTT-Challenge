import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';
import { ComponentsModule } from './components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IconsModule } from './icons/icons.module';

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
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    ComponentsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
