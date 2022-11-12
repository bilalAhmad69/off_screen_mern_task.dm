import React,{useState} from 'react'
import { state } from '../State';

const Divider = () => {
    const [result,setResult] = useState<number>(state.div);
    const [count,setCount] = useState<number>(state.count);
   
    const handleUpdateState=()=>{
        setCount(state.count);
        setResult(state.div);
        }
        window.addEventListener(('click'),handleUpdateState )
  return (
    <div className='box'>
        <h4>6 / {count} </h4>
      <div className='result-box'>
        {(+result).toFixed(1)}
      </div>
    </div>
  )
}

export default Divider
