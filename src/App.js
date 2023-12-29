import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [TodoList,setTodoList] = useState([]);
  const [todo,setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault()
    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: todo, selected: false },
      ]
    })
    setTodo("")
  }
  function checkboxclick(id,selected){
    setTodoList(currentTodos=>{
      return currentTodos.map(x=>{
        if(x.id === id){
          return { ...x,selected}
        }
        return x
      })
    })
  }
  function DeleteTodo(id){
    setTodoList(currentTodos=>{
      return currentTodos.filter(x=>x.id !== id)
    })
  }
  console.log(TodoList);
  
  return (
    <div className="App">
      <br />
      <form onSubmit={addTodo}>
      <label htmlFor="item">Todo List</label>
      <br />
      <input id="item" value={todo} type="text" onChange={e=>setTodo(e.target.value)}/>
      <br />
      <br />
      <button type="submit">Add todo</button>
      </form>
      <h1>Todo List</h1>
      <ul >
       {
        TodoList.map(x =>  {  
            return (
            <li key={x.id}>
            <label>
            <input type = "checkbox" 
            onChange={e=>checkboxclick(x.id,e.target.checked)} 
            checked={x.selected} />
            {x.title}
            </label>
            <button type='button' onClick={()=>DeleteTodo(x.id)}>  Delete</button>
            </li>)
        })
       }
      </ul>
    </div>
  );
}

export default App;
