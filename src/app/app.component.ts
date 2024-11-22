import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UppercasePipe } from './shared/pipes/UppercasePipe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, CurrencyPipe, UppercasePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
