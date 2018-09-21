import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  drugs: any;
  safety: Safety;
  market: Market;
  highlightedDiv: number;
  topsearcheddrugs: any;

  constructor(public dataService: DataService) {
  }
    ngOnInit() {
      this.dataService.getTopSearched().subscribe((topsearcheddrugs) => {
        // console.log(drugs);
        this.topsearcheddrugs = topsearcheddrugs;
    });
    // this.dataService.getSafetylist().subscribe((safety) => {
    //   // console.log(safety);
    //   this.safety = safety;
    // });
    // this.dataService.getMarketlist().subscribe((market) => {
    //   // console.log(market);
    //   this.market = market;
    // });
  }
  

toggleHighlight(newValue: number) {
  if (this.highlightedDiv === newValue) {
    this.highlightedDiv = 0;
  }
  else{
    this.highlightedDiv = newValue;
  }
}
}

interface Safety {
  title: string;
}
interface Market {
  title: string;
}
