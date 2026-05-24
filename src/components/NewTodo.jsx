import React from 'react'

function NewTodo(){
    return(
        <form>
            <h2>Add Todos</h2>
            <label htmlfor="descriptiom">Description:</label>
            <input
                type="text"
                id="description"
            />
            <button>Add todo</button>
        </form>
    )
}
export default NewTodo;