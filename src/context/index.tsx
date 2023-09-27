import React, { ReactNode, createContext, useReducer } from "react";

// Define the initial state
type InitialState = {
  team: string;
  activeSprints: boolean;
};

const initialState: InitialState = {
  team: "Trader",
  activeSprints: false,
};

// Define the reducer function
type Action =
  | { type: "TEAM"; payload: string }
  | { type: "SPRINTS"; payload: boolean };

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "TEAM":
      return { ...state, team: action.payload };
    case "SPRINTS":
      return { ...state, activeSprints: action.payload };
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
