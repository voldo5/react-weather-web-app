import styled from "styled-components";

// interface DragPreviewContainerProps {
//   isHidden?: boolean;
// }
// export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
//   opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
// `;

// max-width: 320px;
//   min-width: 192px;
//   max-height: 200px;
//flex-basis: 280px;
// max-width: 320px;
//   max-height: 200px;
//   flex-shrink: 1;
// export const CardPlaceholder = styled.div`
//   width: 200px;
//   height: 2px;
//   margin: 5px;
//   background-color: red;
//flex-basis: 100%;
// max-width: 320px;

//   flex-basis: 200px;
//   flex-grow: 1;
// `;
//   flex-basis: 220px;
//   flex-grow: 1;
//   width: 220px;
//   max-height: 200px;
//   min-height: 120px;
type CardContainerProps = {
  isHidden?: boolean;
  height: number;
};

export const CardContainer = styled.div<CardContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
  min-width: 192px;
  max-width: 320px;
  height: ${(props) => {
    //console.log("----------props.height = ", props.height);
    return props.height !== null ? props.height + "px" : "120px";
  }};
  cursor: pointer;
  border-radius: 2px;
  margin: 1px;
  display: grid;
  grid-template:
    "wicon wicon condition condition time time dicon" 1fr
    "wicon wicon place place place place place" 1fr
    "temperature temperature temperature date1 date1 date1 date1" 0.9fr
    "temperature temperature temperature date2 date2 date2 date2" 0.9fr
    "hicon hval picon pval sicon sval sval" 0.7fr
    "hicon hval picon pval sicon sval sval" 0.7fr
    / 1fr 1.5fr 1fr 1.5fr 1fr 0.8fr 0.7fr;
  grid-gap: 0px;
  background: var(--color-grey-light);
`;
//   justify-self: center;
//   align-self: stretch;
// flex-grow: 1;
//   flex-shrink: 1;

// export const CardContainer = styled.div<CardContainerProps>`
//   grid-area: ${(props) => "area-" + props.gridArea};
//   opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
//   max-width: 320px;
//   min-width: 192px;
//   max-height: 200px;
//   cursor: pointer;
//   border-radius: 2px;
//   margin: 2px;
//   display: grid;
//   grid-template:
//     "wicon wicon condition condition condition condition" 1fr
//     "wicon wicon place place place place" 1fr
//     "temperature temperature temperature date1 date1 date1" 0.9fr
//     "temperature temperature temperature date2 date2 date2" 0.9fr
//     "hicon hval picon pval sicon sval" 0.7fr
//     "hicon hval picon pval sicon sval" 0.7fr
//     / 1fr 1.5fr 1fr 1.5fr 1fr 1.5fr;
//   grid-gap: 0px;
//   background: var(--color-grey-light);
//   justify-self: center;
//   align-self: stretch;
// `;

//font-size: clamp(1.6rem, -0.875rem + 5.333vw, 2.6rem);
export const WeatherIcon = styled.div`
  grid-area: wicon;
  border-top-left-radius: 2px;
  font-family: weathericons;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: clamp(1.6rem, 1.4462rem + 1.2308vw, 2.6rem);
`;

//font-size: clamp(0.8rem, -1.1rem + 4.3vw, 1.2rem);
//clamp(1rem, 2.5vw, 2rem);
//clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);/
//font-size: clamp(0.8rem, 0.6rem + 1vw, 1.2rem);
export const WeatherCondition = styled.div`
  grid-area: condition;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 0.6915rem + 0.5424vw, 1.2rem);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

//font-size: clamp(0.7rem, -1.1rem + 4.3vw, 0.9rem);
export const Place = styled.div`
  grid-area: place;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.7rem, 0.6458rem + 0.2712vw, 0.9rem);
  font-weight: 500;
`;

//font-size: clamp(1.1rem, -0.9rem + 6.3vw, 2rem);
export const Temperature = styled.div`
  grid-area: temperature;
  color: var(--color-grey-light);
  background: var(--color-dark1);
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: clamp(1.1rem, 0.8559rem + 1.2203vw, 2rem);
`;

//font-size: clamp(0.7rem, -0.9rem + 3.8vw, 1.1rem);
export const CalendarDate1 = styled.div`
  grid-area: date1;
  background: var(--color-green3);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: var(--color-grey-light);

  font-size: clamp(0.7rem, 0.5915rem + 0.5424vw, 1.1rem);
  font-weight: 600;
`;

//font-size: clamp(0.7rem, -0.9rem + 3.8vw, 1.1rem);
export const CalendarDate2 = styled(CalendarDate1)`
  grid-area: date2;
  align-items: flex-start;
  font-size: clamp(0.7rem, 0.5915rem + 0.5424vw, 1.1rem);
`;

//font-size: clamp(0.7rem, -0.9rem + 3.8vw, 1.1rem);
export const LocalTime = styled(CalendarDate1)`
  grid-area: time;

  font-size: clamp(0.7rem, 0.5915rem + 0.5424vw, 1.1rem);
  align-items: flex-end;
  justify-content: center;
  background: var(--color-grey-light);
  color: var(--color-green3);
`;

//font-size: clamp(0.8rem, -0.9rem + 4vw, 1.1rem);
export const HumidityIcon = styled.div`
  grid-area: hicon;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-green3);
  font-size: clamp(0.8rem, 0.7186rem + 0.4068vw, 1.1rem);
  font-weight: 600;
  padding-left: 4px;
`;

//font-size: clamp(0.7rem, -0.9rem + 4vw, 1rem);
export const HumidityValue = styled.div`
  grid-area: hval;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(----color-dark1);

  font-size: clamp(0.7rem, 0.6186rem + 0.4068vw, 1rem);
  font-weight: 400;
`;

export const PressureIcon = styled(HumidityIcon)`
  grid-area: picon;
`;

export const PressureValue = styled(HumidityValue)`
  grid-area: pval;
`;

export const WindIcon = styled(HumidityIcon)`
  grid-area: sicon;
`;

export const WindValue = styled(HumidityValue)`
  grid-area: sval;
`;

// export const FaTimes = styled(HumidityIcon)`
//   grid-area: dicon;
// `;

export const DeleteIcon = styled(HumidityIcon)`
  grid-area: dicon;
  align-items: flex-start;
  justify-content: flex-end;
  color: var(--color-green3);
  margin: 4px;
  cursor: context-menu;
`;
