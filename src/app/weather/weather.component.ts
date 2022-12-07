import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:any;
  resp:any;

  constructor(private service:WeatherService) { }

  ngOnInit() {
  }

  public findWeatherDetail(city: string){
    let response= this.service.weatherTemp(city);
    response.subscribe((data)=>this.resp=data);
    //window.location.reload();
  }

}
