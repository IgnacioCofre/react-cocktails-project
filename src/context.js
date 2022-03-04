import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [ currentSearch, setCurrentSearch ] = useState("")
  const [ loading, setLoading ] = useState(true)
  const [ dataCocktails, setDataCocktails ] = useState([])

  const fetchData = useCallback( async () => {
    setLoading(true)
    try {
      
      const response = await fetch(`${url}${currentSearch}`)
      const data = await response.json()
      const { drinks } = data
      
      if (drinks) {
        
        const newCocktails = drinks.map(drink => {
          //console.log(drink)
          const { idDrink, strCategory, strDrink, strDrinkThumb, strAlcoholic } = drink
          return {
            id: idDrink,
            name: strDrink,
            category: strCategory,
            imgUrl: strDrinkThumb,
            info: strAlcoholic
          }
        })

        setDataCocktails(newCocktails)
      
      } else {
        setDataCocktails([])
      }

    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }, [currentSearch])
  
  useEffect(() => {
    fetchData()
  }, [currentSearch, fetchData])

  return (
    <AppContext.Provider value={{
        currentSearch,
        loading,
        dataCocktails,
        setCurrentSearch
    }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
