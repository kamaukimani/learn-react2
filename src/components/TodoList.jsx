import React from 'react'
import TodoItem from './TodoItem';
function TodoList({todos,onDeleteTodo,onUpdateTodo}){
    console.log(todos)
    return(
        <div>
            <h2>My Todos</h2>
            <ul>
                {todos.map(todo=>(
                    <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
                ))}
                 
            </ul>
        </div>
    )
}
export default TodoList;