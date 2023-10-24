import './CSS/TodoItems.css'

import tick from './assets/tick.png'
import cross from './assets/cross.png'
import not_tick from './assets/not_tick.png'

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteTodo=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    setTodos(data)
  }

  const toggle=()=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through"
        }
        else{
          data[i].display=""
        }
        break;
      }
    }
    setTodos(data)
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img className='todonottick' src={not_tick} alt="" />:<img className='todonottick' src={tick} alt="" />}    
        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} className='todocross' alt="" onClick={()=>{deleteTodo(no)}} />
    </div>
  )
}

export default TodoItems