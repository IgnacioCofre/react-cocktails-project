import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()

  const [ loading, setLoading ] = useState(true)
  const [ drink, setDrink ] = useState([])

  useEffect(() => {
    const fetchDrink = async () => {
    
      setLoading(true)
      try {
        const response = await fetch(`${url}${id}`)
        const responseData = await response.json()
        const { drinks } = responseData
  
        if(drinks) {
          const { 
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
           } = drinks[0]
          
          const ingredientes = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5          
          ]
          
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions, 
            ingredientes
          }
          setDrink(newCocktail)
          
        } else {
          setDrink([])
        }
        setLoading(false)
  
      } catch (error) {
        console.log(error)
      }
    }
    fetchDrink()
  }, [id])

  if (loading) {
    return (<Loading/>)
  }

  if (!drink) {
    return (
      <h2 className='section-title'>No cocktail to display :C</h2>
    )
  }
  
  const { name, image, info, category, glass, instructions, ingredientes } = drink
  
  const ingredientsArray = ingredientes.map((item, idx) => {
    return item ? <span key={idx}>{` ${item}`}</span> : null
  })


  return (
    <section className='section cocktail-section'>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name}/>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredientsArray}
          </p>
        </div>
      </div>  
      <br/>
      <Link to='/' className='btn btn-primary'>
        Back home  
      </Link>  
    </section>
  )
}

export default SingleCocktail
