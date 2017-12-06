import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {CountryService} from '../services/country.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  index: number;
  countryList: Array<any>;
  @BlockUI() blockUI: NgBlockUI;


  constructor(private countryService: CountryService, private router: Router) {
  }

  ngOnInit() {
    this.blockUI.start('Loading...');
    this.countryService.getAllCountries()
      .subscribe((data: any) => {
        this.blockUI.stop();
        this.countryList = data;
      });

  }

  onSelect(index) {
    this.router.navigate(['/country'], {queryParams: {id: index}});

  }
}
