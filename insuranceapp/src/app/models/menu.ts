export class Menu {
//fields or properties
private _label:string;
private _icon:string;
private _items:Item[];
private _routerLink:string;

  constructor(label: string, icon: string, items: Item[], routerLink: string) {
    this._label = label;
    this._icon = icon;
    this._items = items;
    this._routerLink = routerLink;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}

export class Item
{
  private _label:string;
  private _icon:string;
  private _routerLink:string;


  constructor(label: string, icon: string, routerLink: string) {
    this._label = label;
    this._icon = icon;
    this._routerLink = routerLink;
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
}
