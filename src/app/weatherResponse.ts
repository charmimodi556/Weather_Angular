import { Forecast } from "./forecast";

export class WeatherResponse{
       constructor(
       public temperature: string,
       public wind: string,
       public description: string,
       public forecast: Forecast)
       {}
}