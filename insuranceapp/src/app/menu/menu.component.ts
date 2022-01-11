import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'aspire-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data:any;
  userName:any;
  params:any;

  //dependency injection
  constructor(private menuService:MenuService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.data = this.menuService.getMenuData();

    this.route.queryParams.subscribe(param => {

        console.log(JSON.parse(param.data));
        this.params = JSON.parse(param.data)
        this.userName = this.params.firstName;
        console.log(this.userName)

    });
  }
}
