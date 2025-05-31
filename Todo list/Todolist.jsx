import { useState,useEffect } from "react"
import "./Todo.css";
import {v4 as uuidv4} from 'uuid';
export default function Todolist(){
    const [todos, settodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
    let [newtodo,setnewtodo]=useState([]);
    const [filter, setFilter] = useState("all"); // "all", "completed", "incomplete"
    const [sortOrder, setSortOrder] = useState("recent"); // "recent", "alpha"

   const filteredAndSortedTodos = todos
  .filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  })
  .sort((a, b) => {
    if (sortOrder === "alpha") return a.text.localeCompare(b.text);
    return b.id - a.id;
  });



    useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);   

    let Add=()=>{
        settodos([...todos,{task:newtodo,id:Date.now(),isdone:false}]);
        setnewtodo("");
        
    }
    let update=(event)=>{
        setnewtodo(event.target.value);
    }
    let dlttask=(id)=>{
        settodos(todos.filter((todo)=>todo.id!=id));
    }
    let markdone=(id)=>{
        settodos((prevtodos)=>
            prevtodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isdone:true,
                    }; 
                }else{
                    return todo;
                }
            })
        )
    }
    return(
        <div className="main">
        <h2>Get Things Done!</h2>
        <input type="text" placeholder="what is the task today?" value={newtodo} onChange={update}/>
        <button onClick={Add}>Add Task</button>
        <br/><br/>
        <ul>
            {filteredAndSortedTodos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isdone?{textDecorationLine:"line-through"}:{}}>{todo.task} </span>
                 <button className="btn" onClick={()=>dlttask(todo.id)}><i className="fa-solid fa-trash"></i></button>
                 <button className="btn1" onClick={()=>markdone(todo.id)}><i className="fa-solid fa-check"></i></button>
                </li>
            ))}
           
        </ul>
        
        </div>
    )
}