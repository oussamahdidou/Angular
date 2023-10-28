import { Component, Input, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input()
  detailitem!: pokemon;
  constructor() {}
  ngOnInit(): void {
    console.log(this.detailitem);
  }
}
