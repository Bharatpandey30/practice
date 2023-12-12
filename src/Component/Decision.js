import { useState } from "react";
import Counter from "./counter";
import Messages from "./message";
import React from "react";
function Decision(){
    const [condition, setCondition] = useState(true);

    if(condition){
    return(
        <Messages/>
    );
    }
    else{
        return(
            <Counter/>
        );
    }
};
export default Decision;