import React,{useState} from 'react';
import {CATEGORIES,TASKS} from '../data'
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
import Header from './Header';
import Video from './Video';
import FoxImage from './FoxImage';
function App(){
    const [isDark,setIsDark]=useState(false);
    const [isTask,setIsTask]=useState(TASKS)
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
        </div>
    )
}
export default App;