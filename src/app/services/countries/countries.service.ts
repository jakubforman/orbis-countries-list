import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country, Currency} from "../../models/country.model";
import {map, Observable} from "rxjs";

export interface MapCurrency extends Currency {
  key: string;
}

export interface MapCountry extends Omit<Country, "currencies"> {
  currencies: MapCurrency[]
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  country?: MapCountry;

  constructor(
    private http: HttpClient
  ) {
  }

  index$(): Observable<MapCountry[]> {
    return this.http.get<Country[]>(environment.apiBaseUrl + "/all")
      .pipe(map(countries => {
        return countries.map(country => {
          let currencies: MapCurrency[] = [];

          const keys = Object.keys(country.currencies ?? {})
          Object.values(country.currencies ?? {})
            .forEach((currency, index) => {
              currencies.push({
                key: keys[index],
                ...currency
              })
            })

          return {
            ...country,
            currencies: currencies
          }
        });
      }));
  }
}
