import {Component} from '@angular/core';
import {CountriesService} from "../services/countries/countries.service";
import {Observable} from "rxjs";
import {Country} from "../models/country.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries$: Observable<Country[]>;

  constructor(
    private countriesService: CountriesService
  ) {
    this.countries$ = this.countriesService.index$();
  }

  transferCountry(country: Country) {
    this.countriesService.country = country;
  }
}
