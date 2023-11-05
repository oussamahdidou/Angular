import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

@NgModule({
  declarations: [		AppComponent,
      HomeComponent,
      NotFoundComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
