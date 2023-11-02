import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/pokemon';
@Injectable({
  providedIn: 'root',
})
export class Items_serviceService {
  constructor(private request: HttpClient) {
    this.request = request;
  }
  getitems(): Observable<pokemon[]> {
    return this.request.get<pokemon[]>(url);
  }
}
