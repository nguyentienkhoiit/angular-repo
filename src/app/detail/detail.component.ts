import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
}
