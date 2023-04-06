import React from 'react'
import { useContext } from 'react'
import contextParent from './Context01'

const GrandChild = () => {
   const data = useContext(contextParent)
  return (
    <div>
      <h2>Grand Child Component</h2>
      <p style={{fontSize:'1.2rem'}}>Parent Input Data ::<span style={{color:"red",fontSize:'1.5rem',fontWeight:'700'}}> {data} </span> </p>
    </div>
  )
}

export default GrandChild