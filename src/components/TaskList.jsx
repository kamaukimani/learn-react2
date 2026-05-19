import React from 'react';
import Task from './Task';

function TaskList({tasks}){
    //console.log(tasks)
    const oldTasks=tasks.map((task,index)=>(
        <Task key={index} text={task.text} category={task.category} />
    ))
    return(
        <div>
            {oldTasks}
        </div>
    )
}
export default TaskList;