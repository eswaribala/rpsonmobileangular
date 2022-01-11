import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  private engineNo:string;
  private make:string;
  constructor() {
    this.engineNo='H238478342';
    this.make='Kirloskar';
  }

  ngOnInit() {
  }

    handle()
    {
      this.make=this.make.toUpperCase();
    }
}
