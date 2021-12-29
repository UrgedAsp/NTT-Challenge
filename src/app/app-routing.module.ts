import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pais/:id',
    component: DetailsCountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
