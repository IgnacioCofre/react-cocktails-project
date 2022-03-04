import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const id = "14598"
  const fectDrink = async () => {
    try {
      const response = await fetch(`${url}${id}`)
      const responseData = await response.json()
      const { drinks } = responseData
      console.log(drinks)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    fectDrink()
  }, [])
  
  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  )
}

export default SingleCocktail
