import React ,{useState}from 'react'
import { state } from '../State';

const Subtraction = () => {
    const [result,setResult] = useState<number>(state.sub);
    const [count,setCount] = useState<number>(state.count);
    const handleUpdateState=()=>{
        setCount(state.count);
        setResult(state.sub);
        }
        window.addEventListener(('click'),handleUpdateState )

  return (
    <div className='box'>
        {(Math.sign(count)===-1)? <h4> 4  {count}</h4>: <h4> 4 -{count}</h4>}
       
      <div className='result-box'>
        {result}
      </div>
    </div>
  )
}

export default Subtraction
