import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  claimTypes: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.claimTypes = [
      {label: 'Loss', icon: 'pi pi-fw pi-chart-bar', routerLink:'Loss'},
      {label: 'Damage', icon: 'pi pi-fw pi-calendar', routerLink:'Damage'}
    ];
  }




}
