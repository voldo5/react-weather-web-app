import { useState, useEffect } from "react";
import * as S from "./weatherCard.styles";
import { useGetWeather } from "../utils/useGetWeather";
import FlagIcon from "./FlagIcon.js";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useAppState } from "../state/AppStateContext";
import { useDrop } from "react-dnd";
import { moveTask, deleteTask } from "../state/actions";
import { useItemDrag } from "../utils/useItemDrag";
import { isHidden } from "../utils/isHidden";
import useDebounce from "../utils/useDebounce";
import { WeatherData } from "./WeatherCard.props";
import { CardSize } from "../interfaces/interface";
//import { CARD_SIZE } from "../state/data";

//getRef: (val: any) => void;
type CardProps = {
  text: string;
  id: string;

  //   index: number;
  cardSize: CardSize;
  setCardSize: (cardSize: CardSize) => void;
};

function WeatherCard(cardProps: CardProps): JSX.Element {
  const [weatherState, setWeatherState] = useState("");
  let { draggedItem, tasks, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  //const ref = useRef<HTMLButtonElement>(null);

  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      //console.log( "++++++++++++++ hover on card = ", cardProps.id);
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "CARD") {
        if (draggedItem.id === cardProps.id) {
          return;
        }
        // console.log(
        //   "++++++++++++++ drop draggedItem.id, cardProps.id = ",
        //   draggedItem.id,
        //   " ",
        //   cardProps.id
        // );
        dispatch(moveTask(draggedItem.id, cardProps.id));
      }
    },
  });

  const { drag } = useItemDrag({
    id: cardProps.id,
    text: cardProps.text,
    type: "CARD",
  });

  const [widthWindow, setWidthWindow] = useState<number>(0);
  const windowWidthDebounced = useDebounce<number>(widthWindow, 100);

  useEffect(() => {
    function handleResize() {
      setWidthWindow(window.innerWidth);
    }
    if (tasks.length > 0 && tasks[0].idTask === cardProps.id) {
      //console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (tasks.length > 0 && tasks[0].idTask === cardProps.id) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [tasks]);

  useEffect(() => {
    if (tasks.length > 0 && tasks[0].idTask === cardProps.id) {
      const rect = ref.current?.getBoundingClientRect();

      if (rect?.width && rect?.height && rect?.height / rect?.width !== 0.6) {
        let heightFromWidth = rect?.width * 0.6;
        cardProps.setCardSize({
          width: rect?.width,
          height: heightFromWidth,
        } as CardSize);
      }
      //cardProps.getRef(ref.current);
    }
  }, [windowWidthDebounced]);
  //   }, [widthWindow]);

  let weather: WeatherData = useGetWeather(cardProps.text);

  useEffect(() => {
    if (weather.weatherType) {
      switch (weather.weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Snow":
          setWeatherState("wi-day-snow");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weather.weatherType]);

  let dr = drag(drop(ref));
  //console.log("++++++++++++++ drag = ", dr);

  const flagProps = {
    code: weather.country ? weather.country.toLowerCase() : "ua",
    size: "lg",
  };

  //year: "numeric",
  return (
    <>
      <S.CardContainer
        ref={ref}
        isHidden={isHidden(draggedItem, "CARD", cardProps.id)}
        height={cardProps.cardSize.height}
      >
        <S.WeatherIcon>
          <i className={`wi ${weatherState}`}></i>
        </S.WeatherIcon>
        <S.WeatherCondition>{weather.weatherType}</S.WeatherCondition>
        <S.Place>
          <FlagIcon code={flagProps.code} size={flagProps.size} />
          &nbsp;&nbsp;&nbsp;
          {weather.name}, {weather.country}
        </S.Place>
        <S.Temperature>
          <span>{weather.temp}&deg;</span>
        </S.Temperature>
        <S.CalendarDate1>
          {new Date().toLocaleString("en-US", {
            weekday: "long",
          })}
        </S.CalendarDate1>
        <S.CalendarDate2>
          {new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
          })}
        </S.CalendarDate2>
        <S.HumidityIcon>
          <i className={"wi wi-humidity"}></i>
        </S.HumidityIcon>
        <S.HumidityValue>
          {weather.humidity} <br />
          Humidity
        </S.HumidityValue>
        <S.PressureIcon>
          <i className={"wi wi-rain"}></i>
        </S.PressureIcon>
        <S.PressureValue>
          {weather.pressure} <br />
          Pressure
        </S.PressureValue>
        <S.WindIcon>
          <i className={"wi wi-strong-wind"}></i>
        </S.WindIcon>
        <S.WindValue>
          {weather.speed} <br />
          Wind
        </S.WindValue>
        <S.DeleteIcon
          onClick={() => {
            dispatch(deleteTask(cardProps.id));
          }}
        >
          <FaTimes />
        </S.DeleteIcon>
        <S.LocalTime>{weather.timeHourMinutes}</S.LocalTime>
      </S.CardContainer>
    </>
  );
}
//onAdd={(text) => dispatch(addTask(text, newItemFormId))}

export default WeatherCard;
