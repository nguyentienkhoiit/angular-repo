import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from '../shared/pipes/UppercasePipe.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        FormsModule,
        CurrencyPipe,
        UppercasePipe,
        CommonModule,
        RouterLink
    ]
})
export class HomeComponent {
    isVisible = true;

  products = [
    { id: 1, name: 'Samsung Galaxy S20', price: 10000 },
    { id: 2, name: 'Samsung Galaxy S21', price: 2000 },
    { id: 3, name: 'Samsung Galaxy S22', price: 3000 },
    { id: 4, name: 'Samsung Galaxy S23', price: 4000 },
    { id: 5, name: 'Samsung Galaxy S24', price: 5000 },
    { id: 6, name: 'Samsung Galaxy S25', price: 6000 },
    { id: 7, name: 'Samsung Galaxy S26', price: 7000 },
    { id: 8, name: 'Samsung Galaxy S27', price: 8000 },
    { id: 9, name: 'Samsung Galaxy S28', price: 9000 },
    { id: 10, name: 'Samsung Galaxy S29', price: 10000 },
  ]
}
