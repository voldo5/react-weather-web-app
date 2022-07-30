import { useEffect, useState, useContext, useRef } from "react";
import { getWeatherApiData, getTimeZoneApiData } from "./apiUtils";
import { WeatherData } from "../components/WeatherCard.props";
//import { useAppState } from "../state/AppStateContext";

export const useGetWeather = (city: string, timezoneDbRequestDelay: number): WeatherData => {

  const [weatherDataState, setWeatherDataState] = useState<WeatherData>(
    {} as WeatherData
  );
  //let { defaultRequestDelay, incrementDelay, setTimeZoneApiDelay } = useAppState();

  useEffect(() => {
    const f = async () => {
      const openWeatherApiData = await getWeatherApiData(city);     
      setWeatherDataState(openWeatherApiData);
    };
    f();
  }, []);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {

    const getLocalTime = async () => {
      const timeZoneApiData = await getTimeZoneApiData(
        weatherDataState.lon,
        weatherDataState.lat
      );

      setWeatherDataState({
        ...weatherDataState,
        timeHourMinutes:
          Object.keys(timeZoneApiData).length > 0
            ? timeZoneApiData.formatted.slice(11, 16)
            : "",
      });
    };

    if (
      Object.keys(weatherDataState).length > 0 &&
      weatherDataState.timeHourMinutes === ""
    ) {
      
      console.log(
        "useGetWeather timezoneDbRequestDelay = ",
        timezoneDbRequestDelay
      );
      // TimeZoneDb free plan: maximum 1 request per 1 second, so set delay for request
      timerRef.current = setTimeout(getLocalTime, timezoneDbRequestDelay);
    }

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [weatherDataState.dt, timezoneDbRequestDelay]);

  return weatherDataState;
};
