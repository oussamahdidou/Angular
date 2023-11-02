import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class Items_serviceService {
  constructor() {}
  getitems(): pokemon[] {
    return [
      { name: 'oussama', id: '1' },
      { name: 'ahmed', id: '2' },
      { name: 'joedoe', id: '3' },
      { name: 'unknown', id: '4' },
    ];
  }
}
