import {createContext} from 'react'

export const Context = createContext();

const AppContext = ({children}) => (
  <Context.Provider>
    {children}
  </Context.Provider>
)

export default AppContext;
