import {Component} from '@angular/core';
import {CountriesService, MapCountry} from "../services/countries/countries.service";
import {Observable} from "rxjs";
import {Country} from "../models/country.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries$: Observable<MapCountry[]>;

  constructor(
    private countriesService: CountriesService
  ) {
    this.countries$ = this.countriesService.index$();
  }

  transferCountry(country: MapCountry) {
    this.countriesService.country = country;
  }
}
