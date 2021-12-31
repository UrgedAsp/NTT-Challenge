import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisInterface } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrayCountries!: PaisInterface[];

  constructor(private paisService: PaisService, private router: Router) {}

  ngOnInit(): void {
    this.paisService.getAllCountries().subscribe({
      next: (res) => {
        this.arrayCountries = res;
      },
    });
  }

  searchCountry(event: string) {
    if (event == '') {
      this.ngOnInit();
    } else {
      this.paisService.searchByName(event).subscribe({
        next: (res: any) => {
          if (res.status == 404) {
            Swal.fire({
              title: 'Error',
              text: `Country not found`,
            });
          }
          this.arrayCountries = res;
        },
      });
    }
  }

  searchRegion(event: string) {
    if (event == '-') {
      this.ngOnInit();
    } else {
      this.paisService.searchByRegion(event).subscribe({
        next: (res) => {
          this.arrayCountries = res;
        },
      });
    }
  }

  openDetails(code: string) {
    this.router.navigate([`/pais/${code}`]);
  }
}
