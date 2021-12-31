import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCountryComponent } from './input-country/input-country.component';
import { CardCountryComponent } from './card-country/card-country.component';
import { RegionCountryComponent } from './region-country/region-country.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputCountryComponent,
    CardCountryComponent,
    RegionCountryComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    FormsModule
  ],
  exports: [
    InputCountryComponent,
    CardCountryComponent,
    RegionCountryComponent
  ]
})
export class ComponentsModule { }
