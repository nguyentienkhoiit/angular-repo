import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from '../pipes/UppercasePipe.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
    imports: [
        FormsModule,
        CurrencyPipe,
        UppercasePipe,
        CommonModule,
        RouterLink
    ]
})
export class ProductItemComponent {
    @Input() product: any;
}
