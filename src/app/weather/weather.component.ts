import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../weatherResponse';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:any;
  resp:any;
  forecast: Forecast = new Forecast("","","");
  weatherResp: WeatherResponse = new WeatherResponse("","","",this.forecast);

  constructor(private service:WeatherService) { }

  ngOnInit() {
  }

  public findWeatherDetail(city: string){
    let response= this.service.weatherTemp(city);
    response.subscribe((data)=>this.resp=data);
    //window.location.reload();
  }

}
