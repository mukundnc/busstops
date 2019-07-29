import { Injectable } from '@angular/core';
import { BusStop } from '../models/busstop';
import { Donation } from '../models/donation';
import { Card } from 'src/models/card';
import { environment } from '../environments/environment';

@Injectable()
export class MyService {

  private busStops: BusStop[];

  getBusStops(): Promise<BusStop[]> {
    return this.BusStops();
  }

  addDonation(stop: BusStop, donation: Donation, card: Card): Promise<boolean>{
    return new Promise((resolve, reject) => {
        this.Payment(card).then(
            (val) => {
                if (val) {
                  resolve(this.ProcessDonation(stop, donation));
                } else {
                    reject(Error('failed'));
                }
            }
        )
        .catch((err) => {
          reject(err);
        });
    });
  }

  private Payment = (card: Card): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        if (environment.paymentSuccess) {
            resolve(true);
          } else {
            reject(Error('failed to process payment'));
          }
        });
  }

  private BusStops = (): Promise<BusStop[]> => {
    return new Promise((resolve, reject) => {
      if (environment.stopsSuccess) {
          resolve(environment.stops);
        } else {
          reject(Error('failed to fetch bus stops'));
        }
      });
  }

  private ProcessDonation = (stop: BusStop, donation: Donation): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      if (environment.donationSuccess) {
          stop.Donations.push(donation);
          resolve(environment.donationSuccess);
        } else {
          reject(Error('failed to process donations'));
        }
      });
  }

}
