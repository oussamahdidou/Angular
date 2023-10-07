import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  name: string = '';
  items = [
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
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.items.push({ name: value, id: 'x' });
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
