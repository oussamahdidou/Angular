import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import Swal from 'sweetalert2';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input()
  detailitem!: pokemon;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {
    console.log(this.detailitem);
  }
  removeitem() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.remove.emit(this.detailitem);
        Swal.fire('Saved!', '', 'success');
      } else {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
