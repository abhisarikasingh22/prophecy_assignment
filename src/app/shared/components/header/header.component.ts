import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menulist : Array<menuData> = []

  constructor(){}

  ngOnInit() {
    this.menulist = [{
      "menuName" : "Static Table",
      "path" : "statictable"
    }]
  }

}

export interface menuData  {
  menuName : string,
  path: string
}
