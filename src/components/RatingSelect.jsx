import React, { useState } from 'react'

function RatingSelect() {
 
  const [selected, isSeleted] = useState(10)

  function handleChange(e){
    isSeleted(+e.target.value);

  }


    return (
    <ul className='rating'>
      <li>
        <input 
        type="radio"
        id='1'
        name='rating'
        value='1'
        onChange={handleChange}
        checked = {selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input 
        type="radio"
        id='2'
        name='rating'
        value='2'
        onChange={handleChange}
        checked = {selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input 
        type="radio"
        id='3'
        name='rating'
        value='3'
        onChange={handleChange}
        checked = {selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input 
        type="radio"
        id='4'
        name='rating'
        value='4'
        onChange={handleChange}
        checked = {selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input 
        type="radio"
        id='5'
        name='rating'
        value='5'
        onChange={handleChange}
        checked = {selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input 
        type="radio"
        id='6'
        name='rating'
        value='6'
        onChange={handleChange}
        checked = {selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input 
        type="radio"
        id='7'
        name='rating'
        value='7'
        onChange={handleChange}
        checked = {selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input 
        type="radio"
        id='8'
        name='rating'
        value='8'
        onChange={handleChange}
        checked = {selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input 
        type="radio"
        id='9'
        name='rating'
        value='9'
        onChange={handleChange}
        checked = {selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input 
        type="radio"
        id='10'
        name='rating'
        value='10'
        onChange={handleChange}
        checked = {selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  )
}

export default RatingSelect