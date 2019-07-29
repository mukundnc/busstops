import { Pipe, PipeTransform } from '@angular/core';
import { Donation } from './donation';

@Pipe({ name: 'calculate' })
export class CalculatePipe implements PipeTransform {
  transform(donations: Donation[]): number {
    let result = 0;
    donations.map((donation) => {
        result += donation.Amount;
    });
    return result;
  }
}