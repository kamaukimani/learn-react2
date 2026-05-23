import React,{useState} from 'react'

function NewTaskForm({categories,isTask,setIsTask}){
     const initialFormData={
        text:"",
        category:"Code"
    }
    const [formData,setFormData]=useState(initialFormData)
   
    function handleSubmit(event){
        event.preventDefault()
        const newItem={
            text:formData.text,
            category:formData.category
        }
        setIsTask([...isTask,newItem])
        setFormData(initialFormData)
    }
    function handleAdd(event){
        const name=event.target.name;
        const value=event.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Details
                <input type="text" name="text" value={formData.text} onChange={handleAdd}/>
            </label>
            <label>
                Category
                <select name="category" value={formData.category} onChange={handleAdd}>
                    <option value={categories[1]}>Code</option>
                    <option value={categories[2]}>Food</option>
                    <option value={categories[3]}>Money</option>
                    <option value={categories[4]}>Misc</option>
                </select>
            </label>
            <input type="submit" value="Add Task" />
        </form>
    )
}
export default NewTaskForm;