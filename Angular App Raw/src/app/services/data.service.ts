import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Drug } from '../components/home/drug';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  drugs: any;
  produrl: string = environment.produrl;
  searchRoot: string = this.produrl + '/api/drug';
  results: Object[];
  cat: any;
  constructor(public http: Http) {
    // console.log('works');
    this.results = [];
  }
  getDrugslist() {
    return this.drugs = this.http.get(this.produrl + '/api/drugs')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getDruglist(drugname: string) {
    let promise = new Promise((resolve, reject) => {
    let apiRoot = `${this.searchRoot}/${drugname}`;
      this.http.get(apiRoot)
      .toPromise()
      .then(
        res => { // Success
          this.results = res.json();
          console.log(this.results);
          resolve();
          },
          msg => { // Error
          reject(msg);
          });
    });
    return promise;
  }
  getUserinfo() {
  return this.drugs = this.http.get(this.produrl + '/api/userdata')
  .map(response => response.json())
  .catch(this._errorrHandler);
  }
  getTopSearched() {
    return this.drugs = this.http.get(this.produrl + '/api/top5drugs')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getTopSearchedCategories() {
    return this.cat = this.http.get(this.produrl + '/api/top5categories')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getOnlineusers() {
    return this.cat = this.http.get(this.produrl + '/api/onlineusers')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getOfflineusers() {
    return this.cat = this.http.get(this.produrl + '/api/offlineusers')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getDrugsslist() {
    return this.cat = this.http.get(this.produrl + '/api/defaultdruglist/lsd')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  getStatslist() {
    return this.cat = this.http.get(this.produrl + '/api/stats')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }
  // Single Page Reqeuests
  getSigleDruglist() {
    return this.cat = this.http.get(this.produrl + '/api/drugssingle/lsd')
    .map(response => response.json())
    .catch(this._errorrHandler);
  }

 _errorrHandler (error: Response) {
  console.error(error);
  return Observable.throw(error || 'Server Error');
  }
  // getSafetylist() {
  //   return this.http.get('../assets/json/safety.json')
  //   .map(res => res.json());
  // }
  // getMarketlist() {
  //   return this.http.get('../assets/json/market.json')
  //   .map(res => res.json());
  // }
  getNotificationlist() {
    return this.http.get('../assets/json/notifications.json')
    .map(res => res.json());
  }
}
