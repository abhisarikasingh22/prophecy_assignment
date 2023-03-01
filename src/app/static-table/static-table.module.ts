import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPincodeTableComponent } from './static-pincode-table/static-pincode-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';

const Routing : Routes = [
  {
   path: '',
   component: StaticPincodeTableComponent
  }
];


@NgModule({
  declarations: [
    StaticPincodeTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Routing),
  ]
})
export class StaticTableModule { }
