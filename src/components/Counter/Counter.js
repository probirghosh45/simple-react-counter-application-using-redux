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
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div class="max-w-md mx-auto mt-10 space-y-5">
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
    </div>
  );
};

export default Counter;
