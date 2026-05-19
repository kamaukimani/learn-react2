import React from 'react';

function Task(props){
    const {text,category,handleDelete}=props
    return(
        <div>
            <div>{category}</div>
            <div>{text}</div>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}
export default Task;