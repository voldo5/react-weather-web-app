import { useEffect, useState, useContext, useRef } from "react";
import { getWeatherApiData, getTimeZoneApiData } from "./apiUtils";
import { WeatherData } from "../components/WeatherCard.props";
import { useAppState } from "../state/AppStateContext";

export const useGetWeather = (city: string): WeatherData => {
  const [weatherDataState, setWeatherDataState] = useState<WeatherData>(
    {} as WeatherData
  );
  let { timeZoneApiDelay, incrementDelay } = useAppState();

  useEffect(() => {
    const f = async () => {
      const openWeatherApiData = await getWeatherApiData(city);
      //console.log("--openWeatherApiData = ", openWeatherApiData);
      setWeatherDataState(openWeatherApiData);
    };

    f();
  }, []);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    //todo set timer 1cek because TimeZoneApiData send one data in one sec
    const f1 = async () => {
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
      // TimeZoneDb free plan: maximum 1 request per 1 second, so set delay for request
      //incrementDelay(1500);
      timeZoneApiDelay = timeZoneApiDelay + 1500;
      console.log("useGetWeather timeZoneApiDelay = ", timeZoneApiDelay)
      timerRef.current = setTimeout(f1, timeZoneApiDelay);
    }

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [weatherDataState.dt]);

  return weatherDataState;
};
