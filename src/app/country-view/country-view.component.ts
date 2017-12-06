import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../services/country.service';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  public currentCountry;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) {
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.getCountryByIndex(params.id);
    });

  }

  getCountryByIndex(index) {
    this.countryService.getAllCountries()
      .subscribe((data: any) => {
        this.currentCountry = data[index];

      });
  }
}
