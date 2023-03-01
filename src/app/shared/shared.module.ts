import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiService, JwtService } from './services';
import { HeaderComponent } from './components/header/header.component';
import { ResuableTableComponent } from './components/resuable-table/resuable-table.component';
import { PincodeService } from './services/pincode.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PaginationModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    ResuableTableComponent,
  ],
  providers: [ApiService,JwtService,PincodeService],
  declarations: [
    HeaderComponent,
    ResuableTableComponent
  ]
})
export class SharedModule {}
