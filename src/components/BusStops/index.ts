import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../../services/myservice';
import { BusStop } from 'src/models/busstop';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-bus-stops',
  templateUrl: './bus.stops.html',
  styleUrls: ['./bus.stops.css']
})
export class BusStopsComponent implements OnInit{
    searchText: string;
    busstops: BusStop[];
    targetAmount: number;
    serviceUp = true;

    constructor(private service: MyService, private router: Router){
        this.searchText = '';
        this.targetAmount = environment.targetAmount;
    }

    ngOnInit(){
      this.service.getBusStops().then((result: BusStop[]) => {
        this.busstops = result;
      })
      .catch((error) => {
        console.log(error);
        this.serviceUp = false;
      });
    }

    donate(index: number): void {
      this.router.navigateByUrl(`donation/${index}`);
    }

    showStop(stop: BusStop): boolean {
      if (this.searchText) {
        return stop.Name.indexOf(this.searchText) >= 0;
      }
      return true;
    }

}