import { useState } from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);

  const addTodo = (todo) => {
    const newTodos = [...todos, {  todo, done: false, index:total }];
    console.log(newTodos);
    setTodos(newTodos);
    setTotal(total + 1);
  };

  /*const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    setDone(done + (newTodos[index].done ? 1 : -1));
  };*/

  const removeTodo = (index) => {
    console.log(index);
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setTotal(total - 1);
    
  /* setDone(done - (todos[index].done ? 1 : 0));*/
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>Total: {total}</h1>
        <h1>Done: {done}</h1>  
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos}  />
      </div>
    </div>
  );
};

export default App;
  