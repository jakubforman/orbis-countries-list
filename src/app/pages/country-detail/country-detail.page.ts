import { Component, OnInit } from '@angular/core';
import {CountriesService, MapCountry} from "../../services/countries/countries.service";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage {

  country: MapCountry;

  constructor(
    private countriesService: CountriesService
  ) {
    this.country = this.countriesService.country!;
  }


}
