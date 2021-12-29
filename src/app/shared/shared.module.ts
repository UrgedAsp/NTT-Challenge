import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
