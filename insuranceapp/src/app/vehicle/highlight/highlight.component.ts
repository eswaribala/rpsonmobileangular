import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {


  @Output("Highlighter")
  private highlight=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  emitHighlighter()
  {
     this.highlight.emit();
  }


}
