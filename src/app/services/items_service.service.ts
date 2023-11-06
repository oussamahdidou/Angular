import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/pokemon';
@Injectable({
  providedIn: 'root',
})
export class Items_serviceService {
  apiUrl = 'http://localhost:3000/pokemon';
  constructor(private request: HttpClient) {
    this.request = request;
  }
  getitems(): Observable<pokemon[]> {
    return this.request.get<pokemon[]>(url);
  }
  getitem(id: string): Observable<pokemon> {
    return this.request.get<pokemon>(this.apiUrl + '/' + id);
  }
  deletePokemon(id: string) {
    return this.request.delete(`${this.apiUrl}/${id}`);
  }
  addPokemon(pokemom: pokemon): Observable<pokemon> {
    return this.request.post<pokemon>(this.apiUrl, pokemom);
  }
}
