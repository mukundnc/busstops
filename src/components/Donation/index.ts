import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Donor } from 'src/models/donor';
import { BusStop } from 'src/models/busstop';
import { MyService } from 'src/services/myservice';
import { Donation } from 'src/models/donation';
import { environment } from '../../environments/environment';
import { CalculatePipe } from 'src/models/calculatepipe';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
    stop: BusStop;
    donation: Donation;
    card: Card;
    calculate: CalculatePipe;
    serviceUp = true;

    constructor(private route: ActivatedRoute, private service: MyService, private router: Router){
      this.calculate = new CalculatePipe();
      this.card = new Card();
      this.donation = new Donation();
      this.donation.Donor = new Donor();
    }

    ngOnInit() {
      this.service.getBusStops().then((result: BusStop[]) => {
        this.stop = result[this.route.snapshot.params.id];
        this.donation.Amount = this.getAmount();
      })
      .catch(this.error.bind(this));
    }

    getAmount(): number {
      const amount = environment.targetAmount - this.calculate.transform(this.stop.Donations);
      return amount > 0 ? amount : 0;
    }

    donate(): void {
      this.service.addDonation(this.stop, this.donation, this.card).then(() => {
        this.router.navigateByUrl(`stops`);
      })
      .catch(this.error.bind(this));
    }

    error(err: any){
      console.log(err);
      this.serviceUp = false;
    }
}