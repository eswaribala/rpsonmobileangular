import { Injectable } from '@angular/core';
import {MenuData} from "../models/menudata";
import {Purpose} from "../models/purpose";
//singleton
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuData(){
    return MenuData;
  }


}
