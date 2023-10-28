//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  users: pokemon[] = [
    { name: 'oussama', id: '1' },
    { name: 'ahmed', id: '2' },
    { name: 'joedoe', id: '3' },
    { name: 'unknown', id: '4' },
  ];
  /**
   *
   */
  constructor() {}
  ngOnInit(): void {
    console.log('component starting');
    console.log(this.users);
  }
}
