import {Component, ViewChild} from '@angular/core';
import {CountriesService, MapCountry, MapCurrency} from "../services/countries/countries.service";
import {Observable, of, tap} from "rxjs";
import {Country} from "../models/country.model";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal!: IonModal;

  countries$: Observable<MapCountry[]>;

  private countriesOrigin: MapCountry[] = [];

  currencies: MapCurrency[] = [];

  constructor(
    private countriesService: CountriesService
  ) {
    this.countries$ = this.countriesService.index$()
      .pipe(tap(countries => {
        this.countriesOrigin = countries;
        this.currencies = this.filterCurrencies(countries);
      }));
  }

  transferCountry(country: MapCountry) {
    this.countriesService.country = country;
  }

  searchCountry(event: CustomEvent) {
    const value = event.detail.value.toLowerCase();

    const filteredCountries = this.countriesOrigin.filter(country => {
      return country.name.official.toLowerCase().includes(value);
    })

    this.countries$ = of(filteredCountries);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent;
    if (ev.detail.role === 'confirm') {
      console.log("Okno zavřeno");
    }
  }

  filterCurrencies(countries: MapCountry[]): MapCurrency[] {
    // @ts-ignore
    return countries.flatMap(c => c.currencies)
      .reduce((acc: MapCurrency[], curr: MapCurrency) => {
        const duplicate = acc.find(item => item.key === curr.key);
        return duplicate ? acc : [...acc, curr];
      }, []);
  }
}
