import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'tile-component',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() value: any;

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  onChanged(evt) {
    this.changed.emit(evt);
  }

}
