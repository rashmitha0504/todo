import { useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';

let count=0

const Todo = () => {

    const [todos,setTodos]=useState([]);
    const inputRef=useRef(null);

    const add=()=>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value="";
        localStorage.setItem("todoscount",count)
    }
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todoscount");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
        },100)
    },[todos])

  return (
    <div className='todo'>
        <div className="todoheader">
            TO-DO LIST
        </div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your task' className='todo-input' />
            <div onClick={()=>{add()}} className="btn">Add</div>
        </div>
        <div className="todo-list">
            {todos.map((item,index)=>{
                return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    </div>
  )
}

export default Todo