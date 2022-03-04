import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {currentSearch, setCurrentSearch } = useGlobalContext()
  
  function changeHandler(event) {
    const { value } = event.target
    setCurrentSearch(value)
  }

  function submitHandler (event) {
    event.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input 
            type='text'
            id='name'
            value={currentSearch}
            onChange={changeHandler}
          >
          </input>
        </div>
      </form>

    </section>
  )
}

export default SearchForm
