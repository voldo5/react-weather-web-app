import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  WeatherAPI,
  Main,
  Wind,
  Sys,
  Weather,
  Coord,
} from "../../interfaces/weatherAPI";

export interface WeatherData
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  temp: Main["temp"];
  humidity: Main["humidity"];
  pressure: Main["pressure"];
  weatherType: Weather["main"];
  name: WeatherAPI["name"];
  speed: Wind["speed"];
  country: Sys["country"];
  dt: WeatherAPI["dt"];
  lon: Coord["lon"];
  lat: Coord["lat"];
  timeHourMinutes: string;
}

//dt: WeatherAPI["dt"];
//time: TimeApi["time"];
// timezone: WeatherAPI["timezone"];
