import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Purpose} from "../models/purpose";
import {Gender, TypeOfDriver, VehicleClass} from "../models/vehicledata";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) {
  }

  public getCountries():Observable<any>
   {
      return this.httpClient.get("https://restcountries.eu/rest/v2/all");
   }


  getPurpose()
  {
    return Purpose;
  }

  public getVehicleClass() {
    return VehicleClass;
  }

  public getTypeOfDriver() {
    return TypeOfDriver;
  }

  public getGender() {
    return Gender;
  }
}
