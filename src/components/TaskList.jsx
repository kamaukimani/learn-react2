import React,{useState} from 'react';
import Task from './Task';

function TaskList({isTask,setIsTask}){
    
    //console.log(isTask);
    //console.log(tasks)
    function handleDelete(index){
        const updated=isTask.filter((_,i)=>i !=index)
        setIsTask(updated);
    }
    const oldTasks=isTask.map((task,index)=>(
        <li key={index}><Task  text={task.text} category={task.category} handleDelete={()=>handleDelete(index)}/></li>
    ))
    return(
        <div>
            <ol>
                {oldTasks}
            </ol>
        </div>
    )
}
export default TaskList;