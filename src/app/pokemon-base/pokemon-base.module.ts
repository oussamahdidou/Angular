import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [PokemonListComponent, ListComponent, DetailComponent],
  imports: [CommonModule],
  exports: [PokemonListComponent, ListComponent, DetailComponent],
})
export class PokemonBaseModule {}
