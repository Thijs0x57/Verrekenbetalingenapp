import { CalculateService } from './../services/calculate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private calcService: CalculateService) { }

  ngOnInit() {
    this.calcService.overview().subscribe((result)=>{
      console.log('overview: ', result);
    })
  }

}
