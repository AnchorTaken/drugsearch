import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-drugsingle',
  templateUrl: './drugsingle.component.html',
  styleUrls: ['./drugsingle.component.css']
})
export class DrugsingleComponent implements OnInit {

  private routeSub: any;
  private req: any;
  slug: string;
  drugsingle: any;
  url: any;
  effects: any;
  // light: string = '20px';
  constructor(private route: ActivatedRoute, private http: Http, private titleService: Title ) { }
  public setTitle( newTitle: string) {
  }
  getData(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.slug = params['slug'];
      this.url = "http://localhost/api/drugssingle/" + this.slug;
      this.http.get('http://localhost/api/drugs').subscribe(data => {
        data.json().filter(item => {
          // console.log(item)
          if (item.slug === this.slug) {
            // console.log(item)
            this.drugsingle = item;
          } else {
          }
        });
      });

      this.getData().subscribe(
        res => {
            let effects = res['effects'];
            // let resource = resources['positive_s'];
            console.log(effects);
        }
      );
      // this.http.get('http://localhost/api/drugssingle/' + this.slug).subscribe(data => {
      //   data.json().filter(effects => {
      //     this.effects = effects;
      //     console.log(effects);
      //   });
      // });
    });
    this.titleService.setTitle( 'Drug Search - ' + this.slug.toUpperCase());
  }
  ngOnDestroy() {
    // this.routeSub.params.unsubscribe()
  }

}
