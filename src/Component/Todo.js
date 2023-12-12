import { useState } from "react";
function Todo(){
    const [toDo,setTodo] = useState("type your name");
    const [toDoList,setTodoList] = useState([]);

    const handleEvent = (event) =>{
        setTodo(event.target.value);  
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
         let tempList = toDoList;
        tempList.push(toDo);
        setTodoList(tempList);
        console.log(toDoList);
        setTodo("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo} onChange={handleEvent}></input>
            {toDoList.map((item) => (<h1>{"*"} {item} {"*"} </h1>))}
            <button type="submit" >submit </button>
        </form>
    )


};
export default Todo;