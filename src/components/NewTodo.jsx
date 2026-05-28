import React,{useState} from 'react'

function NewTodo({onAddTodo}){
    const [description,setDescription]=useState("")
    function handleSubmit(event){
        event.preventDefault()
        const todoObj={
                description:description,
                completed:false

            }
        fetch("http://localhost:3000/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(todoObj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            onAddTodo(data)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Todos</h2>
            <label htmlFor="descriptiom">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />
            <button>Add todo</button>
        </form>
    )
}
export default NewTodo;