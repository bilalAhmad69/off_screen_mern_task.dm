import React, { useEffect, useState } from 'react'
import {state} from "../State";
import Divider from './Divider'
import Multiplier from './Multiplier'
import Subtraction from './Subtraction'
const calculate = (count:number) =>{
    // all values are save in global variable
   state.mul = -5 * count;
   state.sub = 4 - count;
   count?state.div = 6 / count : state.div=0;
   state.count = count;
}
const Counter = () => {
 let [count , setCount] =  useState<number>(0);
 useEffect(()=>{
    calculate(count);
 }, [count])
 
  return (
    <div>
      <Multiplier/>
      <Subtraction/>
      <Divider/>
      <div className='box'> 
      <div className='counter'>
       <button className="leftbtn" onClick={()=>{
        count = count-1;
        setCount(count);
       }
        }> - </button>
        {count}
       <button className="rightbtn" onClick={()=>{
        count = count+1;
        setCount(count);
       }
        }> + </button>

      </div>
      </div>
    </div>
  )
}

export default Counter
