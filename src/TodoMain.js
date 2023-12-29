import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import TodoForm from './TodoForm';
import ListComponent from './ListComponent';

function TodoMain() {
  const [TodoList,setTodoList] = useState(()=>{
    const todoslocal = localStorage.getItem("TODOS")
    if(todoslocal == null) return []
    return JSON.parse(todoslocal)
  });

  useEffect(()=>{
    localStorage.setItem("TODOS",JSON.stringify(TodoList))
  },[TodoList])

  function addTodo(title) {
    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, selected: false },
      ]
    })
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
      <TodoForm onSubmit={addTodo}/>
      <ListComponent TodoList = {TodoList} checkboxclick={checkboxclick} DeleteTodo={DeleteTodo}/>
    </div>
  );
}

export default TodoMain;
