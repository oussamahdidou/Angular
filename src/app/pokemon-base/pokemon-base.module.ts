import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { Items_serviceService } from '../services/items_service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: PokemonListComponent }, { path: ':id' }],
  },
];
@NgModule({
  declarations: [PokemonListComponent, ListComponent, DetailComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [PokemonListComponent, ListComponent, DetailComponent],
  providers: [Items_serviceService],
})
export class PokemonBaseModule {}
