import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dataService: DataService) { }
  userdata: any;
  drugs: any;
  cat: any;
  ngOnInit() {
  this.dataService.getUserinfo().subscribe((userdata) => {
    this.userdata = userdata;
    console.log(userdata);
    });
  this.dataService.getTopSearched().subscribe((drugs) => {
      // console.log(drugs);
      this.drugs = drugs;
  });

  this.dataService.getTopSearchedCategories().subscribe((cat) => {
    // console.log(cat);
    this.cat = cat;
});
  }
  onNavigate() {
    window.location.href = '/app/logout';
  }

}
