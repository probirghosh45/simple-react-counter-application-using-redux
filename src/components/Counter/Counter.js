import React, { useState } from "react";
 
const Counter = () => {

    const [count,setCount]=useState(0);

    //increment handler function
    const incrementHandler = () =>{
        setCount((previousCount)=>previousCount + 1)
    }

    //decrement handler function
    const decrementHandler = () =>{
        setCount((previousCount)=>previousCount - 1)
    }


  return (
    <div>
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div class="text-2xl font-semibold">{count}</div>
          <div class="flex space-x-3">
            <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={incrementHandler}>
              Increment
            </button>
            <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={decrementHandler}>
              Decrement
            </button>
          </div>
        </div>
    </div>
  );
};

export default Counter;
