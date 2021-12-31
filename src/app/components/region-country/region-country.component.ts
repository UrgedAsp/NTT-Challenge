import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-region-country',
  templateUrl: './region-country.component.html',
  styleUrls: ['./region-country.component.css']
})
export class RegionCountryComponent implements OnInit {

  regionSelected : string = "-";

  @Input() regions : string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  @Output() region : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: string) {
    this.regionSelected = event;
    this.region.emit(this.regionSelected);
  }
}
