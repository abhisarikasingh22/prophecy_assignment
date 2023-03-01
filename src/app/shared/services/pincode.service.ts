import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  constructor(private apiService : ApiService) { }

  getPincode(inputValue : any){
    return this.apiService.get(`/radius.json?latitude=${inputValue.latitude}&longitude=${inputValue.longitude}&distance=${inputValue.distance}`)
  }

  getPincodeBasedOnPincode(inputValue : any){
    return this.apiService.get(`/suburbs.json?postcode=${inputValue}`)
  }

  getGeoLocation(){
    return this.apiService.getGeo("http://ip-api.com/json")
  }

}
