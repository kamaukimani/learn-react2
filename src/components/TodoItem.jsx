import React from 'react'

function TodoItem(props){
    const{todo,onDeleteTodo,onUpdateTodo}=props
    console.log(todo)
    const {id,description,completed}=todo
    function handleDelete(){
        fetch(`http://localhost:3000/todos/${id}`,{
            method:"DELETE"
        })
        onDeleteTodo(id)
    }
    function handleCompleted(completed){
        fetch(`http://localhost:3000/todos/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({completed:completed})
        })
        .then(res=>res.json())
        .then(data=>onUpdateTodo(data.id,data.completed))
    }
    return(
        <div>
            <strong>{description}</strong>
            <label>
                Completed?
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e)=>handleCompleted(e.target.checked)}
                />
            </label>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}
export default TodoItem;