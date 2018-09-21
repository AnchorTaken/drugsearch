import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-static-on-all',
  templateUrl: './static-on-all.component.html',
  styleUrls: ['./static-on-all.component.css']
})
export class StaticOnAllComponent implements OnInit {
  constructor(public dataService: DataService) { }
  usersonline: any;
  usersoffline: any;
  friendsSwtichStatus: number;
  ngOnInit() {
    this.dataService.getOnlineusers().subscribe((usersonline) => {
      console.log(usersonline);
      this.usersonline = usersonline;
    });
    this.dataService.getOfflineusers().subscribe((usersoffline) => {
      console.log(usersoffline);
      this.usersoffline = usersoffline;
    });
  }
  friendsSwtich(newValue: number) {
    if (this.friendsSwtichStatus === newValue) {
      this.friendsSwtichStatus = 0;
    }
    else{
      this.friendsSwtichStatus = newValue;
    }
  }

}
