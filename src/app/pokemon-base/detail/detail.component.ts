import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input()
  detailitem!: pokemon;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {
    console.log(this.detailitem);
  }
  removeitem() {
    this.remove.emit(this.detailitem);
  }
}
