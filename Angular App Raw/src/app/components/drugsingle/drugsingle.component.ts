import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';


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
  // light: string = '20px';
  constructor(private route: ActivatedRoute, private http: Http, private titleService: Title ) { }
  public setTitle( newTitle: string) {
  }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.slug = params['slug'];
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
    });
    this.titleService.setTitle( 'Drug Search - ' + this.slug.toUpperCase());
  }
  ngOnDestroy() {
    // this.routeSub.params.unsubscribe()
  }

}
