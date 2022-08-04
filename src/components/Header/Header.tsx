import React, { useState } from "react";
//import { HeaderProps } from "./Header.props";
import * as S from "./header.styles";
//import styles from "./styles.module.css";
import "./styles.css";
//import { ReactComponent as FirebaseIcon } from ".../assets/Firebase.svg";
//import { ReactComponent as FirebaseIcon1 } from "../Svg/Firebase.svg";
import { ReactComponent as FirebaseIcon } from "../Svg/FirebaseIcon.svg";
import { ReactComponent as HerokuIcon } from "../Svg/HerokuIcon.svg";
import { ReactComponent as HerokuDbIcon } from "../Svg/herokuDb.svg";
import { ReactComponent as Nodatabase } from "../Svg/nodatabase.svg";
//import { ReactComponent as Nodatabase1 } from "../Svg/nodatabase1.svg";
import ReactTooltip from "react-tooltip";

// import { ReactComponent as Drag } from "src/components/UI/Svg/Drag.svg";

//export const Header = (props: HeaderProps): JSX.Element => {
export const Header = (): JSX.Element => {
  const [text, setText] = useState("");  
  //const [showForm, setBackend] = useState(false);

  const [backend, setBackend] = useState('nobackend');
  console.log("backend = ", backend);
  
  // interface tooltips {
  //   firebase: boolean;
  //   heroku: boolean;
  //   nobackend: boolean;
  // }
  // const InitialTooltips: tooltips = {
  //   firebase: true,
  //   heroku: true,
  //   nobackend: true,
  // }
  // const [tooltips, setTooltips] = useState<tooltips>(InitialTooltips);

  const [tooltipF, setTooltipF] = useState(true);
  const [tooltipH, setTooltipH] = useState(true);
  const [tooltipN, setTooltipN] = useState(true);    

  //   const { cardSize, onAdd } = props;

  //   const handleAddText = (
  //     event: React.KeyboardEvent<HTMLInputElement>
  //   ): void => {
  //     if (event.key === "Enter") {
  //       onAdd(text);
  //     }
  //   };

  return (
    <div className="header-container">
        <div className="iconContainer">
          {tooltipF && (
            <ReactTooltip
              className='tooltipTheme'
              id="farebaseTip"
              place="top"
              effect="float"
              delayShow={600}
            />
          )}
          <label
            className="labelBackend"
            htmlFor="firebaseId"
            data-tip="Store app state in Firebase"
            data-for="farebaseTip"
            onMouseEnter={() => {
              setTooltipF(true);
            }}
            onMouseLeave={() => {
              setTooltipF(false);
              setTimeout(() => setTooltipF(true), 50);
            }}
          >
            <input
              type="radio"
              name="backendRadioGroup"
              className="firebase"
              id="firebaseId"
              value="firebase"
              onFocus={(e) => {setBackend(e.target.value)}}
              //onChange={() => {}}
              readOnly
            />
            <FirebaseIcon className="iconBackend" />
          </label>

          {tooltipH && (
            <ReactTooltip
              className='tooltipTheme'
              id="herokuTip"
              place="top"
              effect="float"
              delayShow={600}
            />
          )}
          <label
            className="labelBackend"
            htmlFor="herokuId"
            data-tip="Store app state in Heroku"
            data-for="herokuTip"
            onMouseEnter={() => {              
              setTooltipH(true);
            }}
            onMouseLeave={() => {
              setTooltipH(false);
              setTimeout(() => setTooltipH(true), 50);
            }}
          >
            <input
              type="radio"
              name="backendRadioGroup"
              className="heroku"
              id="herokuId"
              value="heroku"
              onFocus={(e) => {setBackend(e.target.value)}}
              readOnly
            />           
            <HerokuIcon className="iconBackend" />
          </label>

          {/* After upgrading to react 18, tooltip not disappearing.
              This only occurs in Development Strict Mode. ReactTooltip works fine in Production code with React 18.
              Exactly, it runs normally if we remove Strict Mode in root app, of React 18. */}
          {tooltipN && (
            <ReactTooltip
              className='tooltipTheme'
              id="nobackendTip"
              place="top"
              effect="float"
              delayShow={600}
            />
          )}
          <label
            className="labelBackend"
            htmlFor="nobackendId"            
            data-tip="Do not store App state"
            data-for="nobackendTip"
            onMouseEnter={() => {              
              setTooltipN(true);
            }}
            onMouseLeave={() => {
              setTooltipN(false);
              setTimeout(() => setTooltipN(true), 50);
            }}
          > 
            <input
              type="radio"
              name="backendRadioGroup"
              className="nobackend"
              id="nobackendId"
              value="nobackend"
              // checked
              onFocus={(e) => {setBackend(e.target.value)}}
              readOnly
            />                
            <Nodatabase className="iconBackend"/> 
          </label>
        </div>
      {/* </div> */}
    </div>




    // <S.HeaderContainer>
    //   <S.NewItemInput
    //     ref={inputRef}
    //     value={text}
    //     onChange={(e) => setText(e.target.value)}
    //     onKeyPress={handleAddText}
    //   />
    //   <S.NewItemButton
    //     onClick={() => {
    //       onAdd(text);
    //       setShowForm(true);
    //     }}
    //   >
    //     Add New Place
    //   </S.NewItemButton>
    // </S.NewItemFormContainer>
  );
};
