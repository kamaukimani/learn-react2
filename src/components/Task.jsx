import React from 'react';

function Task(props){
    const {text,category}=props
    return(
        <div>
            <div>{category}</div>
            <div>{text}</div>
            <button>X</button>
        </div>
    )
}
export default Task;