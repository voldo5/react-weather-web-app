import { TimeZoneAPI } from "../interfaces/TimeZoneAPI";
//import { WeatherAPI } from "../interfaces/WeatherAPI";
import { WeatherAPI } from "../interfaces/weatherAPI";
import { WeatherData } from "../components/WeatherCard/WeatherCard.props";

export const getTimeZoneApiData = async (
  lon: number,
  lan: number
): Promise<TimeZoneAPI> => {
  try {
    let url1 = `http://api.timezonedb.com/v2.1/get-time-zone?key=FC7K8GG8EGMS&format=json&by=position&lat=${lan}&lng=${lon}`;
    let res1 = await fetch(url1);
    let apiData = (await res1.json()) as TimeZoneAPI;

    // let localTime = apiData.timestamp;
    // console.log("--apiData = ", apiData);
    return apiData;
  } catch (error) {
    console.log("Error: ", error);
    return {} as TimeZoneAPI;
  }
};

export const getWeatherApiData = async (city: string): Promise<WeatherData> => {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=54564adc4a3e0ada20cd7cb1a5888d81`;
    let res = await fetch(url);
    let weatherInfo = (await res.json()) as WeatherAPI;
    let cityLon = weatherInfo.coord.lon;
    let cityLat = weatherInfo.coord.lat;
    //console.log("--weatherInfo = ", weatherInfo);

    const { temp, humidity, pressure } = weatherInfo.main;
    const { main: weatherType } = weatherInfo.weather[0];
    const { name } = weatherInfo;
    const { speed } = weatherInfo.wind;
    const { country } = weatherInfo.sys;
    const { dt } = weatherInfo;

    const myNewWeatherInfo: WeatherData = {
      temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
      dt,
      lon: cityLon,
      lat: cityLat,
      timeHourMinutes: "",
    };

    return myNewWeatherInfo;
  } catch (error) {
    console.log("Error: ", error);
    return {} as WeatherData;
  }
};
