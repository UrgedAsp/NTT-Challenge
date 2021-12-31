import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {

  @Output() country : EventEmitter<string> = new EventEmitter();

  termino : string = "";

  constructor() { }

  ngOnInit(): void {}

  search(){
    this.country.emit(this.termino)
  }

}
