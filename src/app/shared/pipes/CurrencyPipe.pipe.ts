import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currencyPipe',
    standalone: true
})
export class CurrencyPipe implements PipeTransform {
    transform(value: number): string {
        return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(value);
    }
}