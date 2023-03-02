import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos}, toggleDone, removeTodo ) => {
    return (
        <div className="TodoList">
        {todos.map(({todo,done, index}) => (
          <Todo index={index} todo={todo} done={done} 
          /*{toggleDone={() => toggleDone(index)} */
          removeTodo={() => removeTodo(index)} 
          />
        ))}
        </div>
    );
  };


/*
function TodoList({todos}){

    return (
        <div className="TodoList">
            <hr></hr>
          {todos.map(({todo,done}) => <Todo todo={todo} done={done}/>
        )}
          <hr></hr>
        </div>
    )
}
*/
export default TodoList;