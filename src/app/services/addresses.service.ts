import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address} from "../models/address";

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private httpClient: HttpClient) { }

  search(addr){
      return this.httpClient
        .get('https://api-adresse.data.gouv.fr/search/?q=' + addr)
  }
}
