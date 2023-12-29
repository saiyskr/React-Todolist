import React,{useState} from 'react';

function TodoForm(props) {
  const [todo,setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if(todo === "") return
    props.onSubmit(todo)
    setTodo("")
  }
return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Todo List</label>
      <br />
      <input id="item" value={todo} type="text" onChange={e=>setTodo(e.target.value)}/>
      <br />
      <br />
      <button type="submit">Add todo</button>
    </form>
)
}
export default TodoForm;
