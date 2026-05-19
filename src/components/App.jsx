import React,{useState} from 'react';
import {CATEGORIES,TASKS} from '../data'
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
import Header from './Header';
function App(){
    const [isDark,setIsDark]=useState(false);
    function handleDarkMode(){
        setIsDark(isDark=>!isDark)
    }
    const color=isDark ? "black" : "white"
    return(
        <div style={{background:color}}>
            <Header isDark={isDark} handleDarkMode={handleDarkMode}/>
            <h2>My Tasks</h2>
            <CategoryFilter />
            <NewTaskForm />
            <TaskList />
        </div>
    )
}
export default App;