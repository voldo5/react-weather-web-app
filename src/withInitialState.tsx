import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./state/appStateReducer";
import { load } from "./api";
import { appData } from "./state/data";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>(appData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();

    //todo uncomment if using backend to store state 
    // useEffect(() => {
    //   const fetchInitialState = async () => {
    //     try {
    //       const data = await load();
    //       data.tasks.length > 0
    //         ? setInitialState(data)
    //         : setInitialState(initialState);
    //     } catch (e) {
    //       setInitialState(initialState);          
    //     }
    //     setIsLoading(false);
    //   };

    //   fetchInitialState();
    // }, []);

    // ...
    // if (isLoading) {
    //   return <div>Loading</div>;
    // }
    // if (error) {
    //   return <div>{error.message}</div>;
    // }

    return <WrappedComponent {...props} initialState={initialState} />;
  };
}
