import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country} from "../../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
  }

  index$() {
    return this.http.get<Country[]>(environment.apiBaseUrl + "/all");
  }
}
