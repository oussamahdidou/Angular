import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { pokemon } from 'src/app/models/pokemon';
import { Items_serviceService } from 'src/app/services/items_service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input()
  detailitem: pokemon = { id: '', name: '' };
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private items_service: Items_serviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.items_service.getitem(data['id']).subscribe(
        (response: pokemon) => {
          this.detailitem = response;
          console.log(this.detailitem);
        },
        (error) => {
          console.error(error);
        }
      );
    });
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
