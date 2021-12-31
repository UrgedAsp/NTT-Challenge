import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';
import { switchMap } from 'rxjs/operators';
import { PaisDetailsInterface } from 'src/app/interfaces/pais-detail.interface';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css'],
})
export class DetailsCountryComponent implements OnInit, AfterViewInit {
  country!: PaisDetailsInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.searchByAlpha(id)))
      .subscribe({
        next: (res) => {
          this.country = res[0];
        },
      });
  }

  ngAfterViewInit(): void {}
}
