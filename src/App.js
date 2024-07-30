import React, { useState } from 'react';
import TodoItem from './Todoitem';


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  

  const AddTodo = () => {
    if (inputValue === '') {
      alert ("enter the task");
      
    }else{
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const EditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const UpdateTodo = () => {
    if (editValue === "" ) {
      alert("please enter the update task")
      
    }else{
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? editValue.trim() : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditValue('');
    }
  };

  const RemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(null);
      setEditValue('');
    }
  };



  return (
    <div className="App">  
      <h1> To-Do List</h1><br/>

      <div>
        <input type="text" value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task" id='input'
        />
        <button onClick={AddTodo} id='add'>Add Task</button>
      </div>


      {editIndex !== null && (
        <div>
          <input type="text" value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Edit task" id='editInput'
          />
          <button onClick={UpdateTodo} id='update'>Update</button>
          <button onClick={() => setEditIndex(null)} id='cancel'>Cancel</button>
        </div>
      )}


      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo}
            onEdit={() => EditTodo(index)}
            onRemove={() => RemoveTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
