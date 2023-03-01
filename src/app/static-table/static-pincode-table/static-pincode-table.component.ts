import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription,of } from 'rxjs';
import { PincodeService } from 'src/app/shared/services/pincode.service';
import { debounceTime, distinctUntilChanged, switchMap,filter, } from 'rxjs/operators';

@Component({
  selector: 'app-static-pincode-table',
  templateUrl: './static-pincode-table.component.html',
  styleUrls: ['./static-pincode-table.component.scss']
})
export class StaticPincodeTableComponent implements OnInit{

  headerList : Array<tableHeaderData> = [{
    "headerName" : "Name",
    "keyValue" : "name"
  },{
    "headerName" : "Locality",
    "keyValue" : "locality"
  },{
    "headerName" : "Post Code",
    "keyValue" : "postcode"
  }]

  searchModelChangeSubscription: Subscription | undefined
  search: string = "";
  searchModelChanged: Subject<string> = new Subject<string>();
  gridArray : Array<suburbs> = []
  allSub : Array<suburbs> = []
  inputValue : inputParam = {
    longitude : 0,
    latitude: 0,
    distance: 4000,
  }

  constructor(private pincodeService : PincodeService){}

  ngOnInit(): void {
    this.searchModelChangeSubscription = this.searchModelChanged
    .pipe(
      filter((query: string) =>  query?.length >= 3 || !query),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data=> data ? this.pincodeService.getPincodeBasedOnPincode(data) : of(this.allSub) )
    )
    .subscribe((data :any) => {
      this.gridArray = data
    });
    this.getLocation();
  }

  getLocation() {
    this.pincodeService.getGeoLocation().subscribe((data:any)=>{
      this.inputValue.latitude = data.lat
      this.inputValue.longitude = data.lon
      this.getAllSuburbsPincode()
    })
  }
  
  getAllSuburbsPincode(){
    this.pincodeService.getPincode(this.inputValue).subscribe((data:suburbs[])=>{
      this.allSub = data
      this.gridArray = data
    })
  }

  ngOnDestroy(){
    this.searchModelChangeSubscription?.unsubscribe()
  }
}

export interface tableHeaderData  {
  headerName : string,
  keyValue: string
}

export interface inputParam {
  longitude : number,
  latitude: number,
  distance: number,
}

export interface suburbs {
  name : string,
  locality: string,
  postcode: number,
}

