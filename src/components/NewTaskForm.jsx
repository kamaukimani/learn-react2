import React from 'react'

function NewTaskForm(){
    return(
        <form>
            <label>
                Details
                <input type="text" name="text" />
            </label>
            <label>
                Category
                <select>

                </select>
            </label>
            <input type="submit" value="Add Task" />
        </form>
    )
}
export default NewTaskForm;