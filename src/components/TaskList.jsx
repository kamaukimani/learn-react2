import React from 'react';
import Task from './Task';

function TaskList({tasks}){
    //console.log(tasks)
    const oldTasks=tasks.map((task,index)=>(
        <li key={index}><Task  text={task.text} category={task.category} /></li>
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