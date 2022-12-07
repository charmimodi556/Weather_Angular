import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  public weatherTemp(city: string){
    return this.http.get("http://localhost:8080/weather/"+city, {responseType: 'text' as 'json'});
  }
}
