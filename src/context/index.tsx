import React, { ReactNode, createContext, useReducer } from "react";

// Define the initial state
type InitialState = Record<string, string>;

const initialState: InitialState = {
  team: "Trader",
};

// Define the reducer function
type Action = { type: "TEAM"; payload: string };

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "TEAM":
      return { ...state, team: action.payload };
    default:
      return state;
  }
};

// Create the context
interface ContextProps {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}

const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

// Create the context provider
export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// Export the context
export const useContextValue = () => React.useContext(Context);
