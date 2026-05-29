import React,{useEffect,useState} from 'react';
import {CATEGORIES,TASKS} from '../data'
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
import Header from './Header';
import Video from './Video';
import FoxImage from './FoxImage';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
function App(){
    const [isDark,setIsDark]=useState(false);
    const [isTask,setIsTask]=useState(TASKS)
    const [todos,setTodos]=useState([])
    const [text,setText]=useState("")
    useEffect(()=>{
        document.title=text
    },[text])
    // useEffect(()=>{
    //     setTimeout(()=>setText(""),5000)
    // })
    useEffect(()=>{
        fetch("http://localhost:3000/todos")
        .then(res=>res.json())
        .then(data=>setTodos(data)
    )
    },[])
    //console.log(todos)
    function addTodo(newTodo){
        const updatedTodos=[...todos,newTodo]
        setTodos(updatedTodos)
    }
    function deleteTodo(id){
        const updatedTodos=todos.filter(todo=>todo.id !== id)
        setTodos(updatedTodos)
    }
    function updateTodo(id,completed){
        const updatedTodos=todos.map(todo=>{
            if(todo.id === id){
                return {...todo,completed}
            }else{
                return todo
            }
        })
        setTodos(updatedTodos)
    }
    function handleDarkMode(){
        setIsDark(isDark=>!isDark)
    }
    const color=isDark ? "black" : "white"
      const [filterBy,setFilterBy]=useState("All")
    const itemsToDisplay=filterBy ==="All" 
        ? isTask 
        : isTask.filter(task=> task.category===filterBy)
    
    return(
        <div style={{background:color}}>
            <Header isDark={isDark} handleDarkMode={handleDarkMode}/>
            <h2>My Tasks</h2>
            <CategoryFilter categories={CATEGORIES} setFilterBy={setFilterBy}/>
            <NewTaskForm categories={CATEGORIES} isTask={isTask} setIsTask={setIsTask}/>
            <TaskList isTask={itemsToDisplay} setIsTask={setIsTask}/>
            <Video />
            <FoxImage />
            <NewTodo  onAddTodo={addTodo}/>
            <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo}/>
            <input 
                type="text"
                placeholder="Type away..."
                value={text}
                onChange={(e=>setText(e.target.value))}
            />
        </div>
    )
}
export default App;