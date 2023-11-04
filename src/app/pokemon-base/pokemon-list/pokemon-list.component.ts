//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { Items_serviceService } from 'src/app/services/items_service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  /**
   *
   */
  item!: pokemon;
  items!: pokemon[];
  constructor(private items_service: Items_serviceService) {}
  ngOnInit(): void {
    console.log('component starting');
    this.items_service.getitems().subscribe(
      (response: pokemon[]) => {
        this.items = response;
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(this.items);
  }
  handleremove(event: pokemon) {
    this.items = this.items.filter((item) => item !== event);
  }
}
