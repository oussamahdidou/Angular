import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
export interface pokemon {
  name: string;
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  name: string = '';
  items: pokemon[] = [
    { name: 'oussama', id: '1' },
    { name: 'ahmed', id: '2' },
    { name: 'joedoe', id: '3' },
    { name: 'unknown', id: '4' },
  ];

  constructor() {
    this.title = '';
  }
  logValue(value: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.items.push({ name: value, id: 'x' });
        this.title = '';
        // myInput.value = '';
        Swal.fire('Saved!', '', 'success');
      } else {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
