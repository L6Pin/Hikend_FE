import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../data-access/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService, private route:ActivatedRoute){}

  city:any = {}


  ngOnInit(): void {
   
    this.cityService.getSingleCity(this.route.snapshot.params['id']).subscribe(res => {
      console.log(res.data)
      this.city = res.data
    })
    
  }

}
