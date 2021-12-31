import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoonComponent } from './moon/moon.component';
import { SearchComponent } from './search/search.component';
import { ArrowBackComponent } from './arrow-back/arrow-back.component';



@NgModule({
  declarations: [
    MoonComponent,
    SearchComponent,
    ArrowBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoonComponent,
    SearchComponent,
    ArrowBackComponent
  ]
})
export class IconsModule { }
