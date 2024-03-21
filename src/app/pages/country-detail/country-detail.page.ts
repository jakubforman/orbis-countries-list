import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries/countries.service";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage {

  country: Country;

  constructor(
    private countriesService: CountriesService
  ) {
    this.country = this.countriesService.country!;
  }


}
