import React from 'react';
import {CATEGORIES,TASKS} from '../data'
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
function App(){
    return(
        <div>
            <h2>My Tasks</h2>
            <CategoryFilter />
            <NewTaskForm />
            <TaskList />
        </div>
    )
}
export default App;