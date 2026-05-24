import React from 'react'
import TodoItem from './TodoItem';
function TodoList(){
    return(
        <div>
            <h2>My Todos</h2>
            <ul>
                <TodoItem/>
            </ul>
        </div>
    )
}
export default TodoList;