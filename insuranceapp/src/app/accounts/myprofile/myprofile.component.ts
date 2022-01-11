import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
