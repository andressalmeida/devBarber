/* eslint-disable prettier/prettier */
import React, {createContext, useReducer} from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
  <UserContext.Provider value={{state, dispatch}}>
    {children}
    </UserContext.Provider>
  );
};
