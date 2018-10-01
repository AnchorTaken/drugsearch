import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Drug } from './drug';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   constructor(public dataService: DataService, private titleService: Title) {
  }
  drugs: any;
  drugss: any;
  drug: Observable<Drug[]>;
  stats: any;
  state: any;
  topsearcheddrugs: any;
  // notification: Notification;
  public setTitle( newTitle: string) {
  }
  ngOnInit() {
  this.dataService.getDrugslist().subscribe((drugs) => {
    // console.log(drugs);
    this.drugs = drugs;
  });
  this.dataService.getDrugsslist().subscribe((drugss) => {
    // console.log(drugss);
    this.drugss = drugss;
  });
  this.dataService.getStatslist().subscribe((stats) => {
    console.log(stats);
    this.stats = stats;
  });
  this.dataService.getSigleDruglist().subscribe((state) => {
    console.log(state);
    this.stats = state;
  });
  // this.dataService.getNotificationlist().subscribe((notification) => {
  //   console.log(notification);
  //   this.notification = notification;
  // });
  this.titleService.setTitle( 'Drug Search' );
  this.dataService.getTopSearched().subscribe((topsearcheddrugs) => {
    // console.log(drugs);
    this.topsearcheddrugs = topsearcheddrugs;
});

}

doSearch(drugname: string) {
  this.dataService.getDruglist(drugname);
}

}
interface Drugs {
  title: string;
  category: string;
}
// interface Notification {
//   notification: string;
//   enabled: boolean;
// }
