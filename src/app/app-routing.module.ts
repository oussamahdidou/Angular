import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-base/pokemon-list/pokemon-list.component';
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon-base/pokemon-base.module').then(
        (m) => m.PokemonBaseModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
