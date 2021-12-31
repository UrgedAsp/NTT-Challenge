import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisInterface } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() country!: PaisInterface
  @Output() imgClicked : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detailsCountry(alpha2Code: string){
    this.imgClicked.emit(alpha2Code);
  }

}
