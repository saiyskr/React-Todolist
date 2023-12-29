import React from "react";

function TodoItem({selected,id,title,checkboxclick,DeleteTodo}){
    return(
       
             <li>
             <label>
             <input type = "checkbox" 
             onChange={e=>checkboxclick(id,e.target.checked)} 
             checked={selected} />
             {title}
             </label>
             <button type='button' 
             onClick={()=>DeleteTodo(id)}
             >  Delete</button>
             </li>
    )
}
export default TodoItem;