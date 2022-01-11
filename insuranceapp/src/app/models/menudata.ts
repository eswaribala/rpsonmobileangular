import {Item, Menu} from "./menu";


export const MenuData:Menu[] =[new Menu('Claim','pi pi-fw pi-plus',[new Item('Create','pi pi-fw pi-pencil',
  'Claim/Create'),
  new Item('Edit','pi pi-fw pi-user-edit','Claim/Edit'),
  new Item('View Status','pi pi-fw pi-file-o','Claim/View')],'Claim'),

  new Menu('Policy Dashboard','pi pi-fw pi-plus',[
    new Item('Renew','pi pi-fw pi-file-o','Policy/Renew'),
    new Item('View Status','pi pi-fw pi-file-o','Policy/ViewStatus')],'Policy'),

  new Menu('Vehicle','pi pi-fw pi-plus',[
    new Item('View','pi pi-fw pi-file-o','Vehicle/ViewVehicle'),
    new Item('Upload','pi pi-fw pi-file-o','Vehicle/Upload'),
  ],'Vehicle'),




  new Menu('Accounts','pi pi-fw pi-plus',[
    new Item('My Profile','pi pi-fw pi-user','Accounts/MyProfile'),
    new Item('Logout','pi pi-fw pi-sign-out','Accounts/Logout')
  ],'Accounts'),



]
