import React,{useState} from "react";
import TodoItem from './TodoItem';

function ListComponent({TodoList,DeleteTodo,checkboxclick}){
    return (
        <>
    <h1>Todo List</h1>
      <ul >
       {
        TodoList.map(todo =>  {  
            return (
            <TodoItem 
            {...todo}
            // selected={selected} 
            // id={id} 
            // title={title} 
            key={todo.id} 
            DeleteTodo={DeleteTodo}
            checkboxclick={checkboxclick}
            />)
        })
       }
      </ul>
      </>
    )
}
export default ListComponent;