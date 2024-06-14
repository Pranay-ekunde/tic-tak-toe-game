
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
const CounterComponent=()=>{
    let [counter,setCounter] = useState(0);

    function increment()
    {
        setCounter(counter++);

    }
    function decrement()
    {
        setCounter(counter--);
    }
    function reset()    {
        setCounter(counter=0);
    }
    
    return(
        <div>
             <h3>{counter}</h3>
             <FaPlus onClick={increment} style={{color : "red"}}/>
             <FaMinus onClick={decrement} />
             <IoRefresh onClick={reset} />
        </div>
    );
};

export default CounterComponent;