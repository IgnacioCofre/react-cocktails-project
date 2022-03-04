import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [ currentSerch, setCurrentSeacrh ] = useState("")
  const [ dataCocktails, setDataCocktails ] = useState("")

  useEffect(() => {
    fetch(`${url}${currentSerch}`)
    .then(res => res.json())
    .then(data => setDataCocktails(data))
  
  }, [currentSerch])

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
