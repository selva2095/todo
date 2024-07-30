import React from 'react';

function TodoItem({ todo, onEdit, onRemove }) {

   
      

    
  return (
    < li id='list'>
      {todo}
      <button onClick={onEdit} id='edit'>Edit</button>
      <button onClick={onRemove} id='remove'>Remove</button>
    </li>
  );
}

export default TodoItem;
