import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, dataCocktails, currentSearch } = useGlobalContext()
  
  if (loading) {
    return <Loading />
  }

  if (dataCocktails < 1) {
    return (
      <h3 className='section-title'>No cocktails matched your search: {currentSearch}</h3>
    )
  } 

  const drinkArray = dataCocktails.map(drink => {  
    return (
      <Cocktail 
        key={drink.id}
        {...drink}
      />
    ) 
  })

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {drinkArray}
      </div>
    </section>
  )
}

export default CocktailList
