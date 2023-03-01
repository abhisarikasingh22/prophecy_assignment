import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resuable-table',
  templateUrl: './resuable-table.component.html',
  styleUrls: ['./resuable-table.component.scss']
})
export class ResuableTableComponent implements OnInit{
  @Input() headerList : Array<tableHeaderData> = []
  @Input() gridArray : Array<any> =[]
  pagination = new pagination()
  currentRecordsData : any = []

  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges){
    console.log(this.gridArray,changes)
    this.pagination = new pagination()
    this.pagination.currentRecords = this.fetchRecordsByPage(1);
  }


  pageChange(event: any) {
    this.pagination.pageNo = event.page
    this.pagination.currentRecords = this.fetchRecordsByPage(event.page);
    this.currentRecordsData = this.pagination.currentRecords
  }

  fetchRecordsByPage(page : any) {
    const results = this.gridArray;
    return results.slice((page - 1) * this.pagination.itemsPerPage, this.pagination.itemsPerPage * page);
  }

  changeItemsPerPage() {
    this.pagination.currentRecords = this.fetchRecordsByPage(1);
    this.currentRecordsData = this.pagination.currentRecords
  }

}

export interface tableHeaderData  {
  headerName : string,
  keyValue: string
}

export class pagination {
  id: string = "";
  currentRecords : Array<any> = [];
  currentPage : number = 1; 
  itemsPerPage: number = 10;
  pageNo: number = 1;
}