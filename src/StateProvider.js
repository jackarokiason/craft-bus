import React, {createContext, useContext, useReducer} from "react";
//prepare datalayer
export const StateContext = createContext();
//wrap our app and provide the datalayer
export const StateProvider =({reducer, intialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
        </StateContext.Provider>
);
// pull information from the data layer
export const useStateValue = () => useContext(StateContext);

