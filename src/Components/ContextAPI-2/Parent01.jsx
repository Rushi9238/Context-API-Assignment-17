import React, { useState } from 'react'
import Child01 from './Child01'
import contextChild from './Context02'

const Parent01 = () => {
  const [data, setData] = useState('')
  return (
    <div style={{height:'100%',width:'50%',margin:"50px",display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
      <h2>Parent01 Component</h2>
      <h3>Passing Data From Child to Parent</h3>
      <p style={{fontSize:'1.1rem'}}>Data Coming from Child :<span style={{color:"red",fontSize:'1.5rem',fontWeight:'700'}}> {data} </span> </p>
      <hr />
      <contextChild.Provider value={{setData}}>

        <Child01 />
      </contextChild.Provider>
    </div>
  )
}

export default Parent01