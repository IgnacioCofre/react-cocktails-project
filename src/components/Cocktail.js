import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, imgUrl, info}) => {
  
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={imgUrl} alt='cocktail-tumb'/>  
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{info}</h4>
        <Link to={`/cocktail/${id}`} className='btn btn-primary'>
          More details
          </Link>
      </div>
    </article>
  )
}

export default Cocktail
