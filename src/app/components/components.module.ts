import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCountryComponent } from './input-country/input-country.component';
import { CardCountryComponent } from './card-country/card-country.component';



@NgModule({
  declarations: [
    InputCountryComponent,
    CardCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
