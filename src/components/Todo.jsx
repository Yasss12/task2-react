import React from 'react';

/*const Todo = ({ todo}) => {
  return (
    <div>
      <span>{todo}</span>
    <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
};

export default Todo;*/

function Todo({todo,done,index}, {removeTodo} ){
    return (
        <li className="Todo">
            <input type="checkbox" checked={done}/>
              <div>  {todo} </div>
            <button onClick={removeTodo} >delete</button>
            
        </li>
    )
}

export default Todo