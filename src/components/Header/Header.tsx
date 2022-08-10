import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  GoogleLogin,
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { ReactComponent as FirebaseIcon } from "../Svg/FirebaseIcon.svg";
import { ReactComponent as HerokuIcon } from "../Svg/HerokuIcon.svg";
import { ReactComponent as NoDbIcon } from "../Svg/noDbIcon.svg";
//import { AuthContext, AuthProvider, useUserContext, useAuth } from ".../firebase/Authprovider";
//import { AuthContext } from ".../firebase/Authprovider";
//export const FIREBASE_CONFIG = {
//import { FIREBASE_CONFIG} from "../firebase/config";
import {
  AuthContext,
  AuthProvider,
  useUserContext,
  useAuth,
} from "../../firebase/Authprovider";
import styles from "./styles.module.css";
// import "./styles.css";

console.log("-----------Header");
//export const Header = (props: HeaderProps): JSX.Element => {
export const Header = (): JSX.Element => {
  const [text, setText] = useState("");
  const [backend, setBackend] = useState("nobackend");
  console.log("backend = ", backend);

  const {
    user,
    auth,
    signIn,
    signUp,
    sendPasswordResetEmail,
    signInPopUp,
    signOutUser,
  } = useAuth();

  const [tooltipF, setTooltipF] = useState(true);
  const [tooltipH, setTooltipH] = useState(true);
  const [tooltipN, setTooltipN] = useState(true);

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //console.log('Login Success: currentUser:', res.profileObj);
    console.log("Login Success: currentUser:", res);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );

    //refreshTokenSetup(res);
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("Login failed: res:", res);
    // alert(
    //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    // );
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  //1016012247781-k2vejd6jlj4kle9qqgrvbrpptg62ja3p.apps.googleusercontent.com
  //1016012247781-v3unmbci425l38kgnrqqacpkmm6ufn9q.apps.googleusercontent.com

  const clientId =
    "265085235727-2tlsmthn0m1a5v39i131ib0gtsn2j29a.apps.googleusercontent.com";

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   isSignedIn: false,
  //   accessType: 'offline',
  //   // responseType: 'code',
  //   // prompt: 'consent',
  // });

  //  useEffect(() => {
  //     signIn();
  // }, [backend]);

  // useEffect(() => {
  //   function initFirebaseAuth() {
  //     // Listen to auth state changes.
  //     onAuthStateChanged(getAuth(), authStateObserver);
  //   }

  //   initFirebaseAuth();
  // }, []);

  // useEffect(() => {
  //   async function signIn() {
  //     // Sign in Firebase using popup auth and Google as the identity provider.
  //     var provider = new GoogleAuthProvider();
  //     await signInWithPopup(getAuth(), provider); }

  //     signIn();
  // }, [backend]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //   const { cardSize, onAdd } = props;

  //   const handleAddText = (
  //     event: React.KeyboardEvent<HTMLInputElement>
  //   ): void => {
  //     if (event.key === "Enter") {
  //       onAdd(text);
  //     }
  //   };
  //<div className={styles.rowTimePickerTimePicker}></div>
  return (
    <div className={styles.headerContainer}>
      {/* <div>Hello</div> */}
      <div
        id="g_id_onload"
        data-client_id="265085235727-2tlsmthn0m1a5v39i131ib0gtsn2j29a.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://voldo5.github.io/react-weather-web-app/"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_blue"
        data-text="signin_with"
        data-size="large"
        data-locale="en-US"
        data-logo_alignment="left"
      ></div>

      <div className={styles.iconContainer}>
        {/* {tooltipF && ( */}
        {tooltipF && (
          <ReactTooltip
            className={styles.tooltipTheme}
            id="farebaseTip"
            place="top"
            effect="float"
            delayShow={1600}
          />
        )}
        <label
          className={styles.labelBackend}
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
            className={styles.firebase}
            id="firebaseId"
            value="firebase"
            //onFocus={(e) => {signIn(); alert('signIn')}}
            //onMouseDown={(e) => {signIn('', '')}}
            onMouseDown={(e) => {
              signInPopUp();
            }}
            //onFocus={(e) => {setBackend(e.target.value)}}
            //onChange={() => {}}
            readOnly
          />
          <FirebaseIcon className={styles.iconBackend} />
        </label>

        {tooltipH && (
          <ReactTooltip
            className={styles.tooltipTheme}
            id="herokuTip"
            place="top"
            effect="float"
            delayShow={600}
          />
        )}
        <label
          className={styles.labelBackend}
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
            className={styles.heroku}
            id="herokuId"
            value="heroku"
            onFocus={(e) => {
              setBackend(e.target.value);
            }}
            readOnly
          />
          <HerokuIcon className={styles.iconBackend} />
        </label>

        {/* After upgrading to react 18, tooltip not disappearing.
              This only occurs in Development Strict Mode. ReactTooltip works fine in Production code with React 18.
              Exactly, it runs normally if we remove Strict Mode in root app, of React 18. */}
        {tooltipN && (
          <ReactTooltip
            className={styles.tooltipTheme}
            id="nobackendTip"
            place="top"
            effect="float"
            delayShow={600}
          />
        )}
        <label
          className={styles.labelBackend}
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
            className={styles.nobackend}
            id="nobackendId"
            value="nobackend"
            // checked
            //onFocus={(e) => {setBackend(e.target.value)}}
            onMouseDown={(e) => {
              signOutUser();
            }}
            readOnly
          />
          <NoDbIcon className={styles.iconBackend} />
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
