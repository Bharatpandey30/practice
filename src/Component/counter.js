import React, { useState } from "react";


function Counter()
{
    const[number,setNumber] = useState(0);

    const increment =()=> { setNumber(number + 1)};
      
    return(
        <div>
            <p> {number} </p>
            <button onClick={increment}> button </button>
        </div>
    );

};
export default Counter;