import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./Reducer";

const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();

export function useWeatherState() {
  const context = useContext(WeatherStateContext);
  if (!context) {
    throw Error("Error In WeatherStateContext");
  }
  return context;
}

export function useWeatherDispatch() {
  const context = useContext(WeatherDispatchContext);
  if (!context) {
    throw Error("Error In WeatherDispatchContext");
  }
  return context;
}

export default function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherStateContext.Provider>
  );
}
