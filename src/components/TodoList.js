import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos }) => {

    return (

        <div classNmae="todo-container">
        <ul classNmae="todo-list">

          {todos.map (todo =>(
            < Todo key = {todo.id} text={todo.text}  />
          ) ) }
        </ul>
      </div>



    );
}

export default TodoList;