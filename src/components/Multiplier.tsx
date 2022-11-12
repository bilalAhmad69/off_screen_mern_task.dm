import React, {  useState } from 'react'
import { state } from '../State';

const Multiplier = () => {
    const [result,setResult] = useState<number>(state.mul);
    const [count,setCount] = useState<number>(state.count);
       const handleUpdateState=()=>{
        setCount(state.count);
        setResult(state.mul);
        }
        window.addEventListener(('click'),handleUpdateState )
    
  return (
    <div className='box'>
        <h4> -5  X {count} </h4>
      <div className='result-box'>
        {result}
      </div>
    </div>
  )
}

export default Multiplier
