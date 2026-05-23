import React,{useState} from 'react'

function CategoryFilter({categories,setFilterBy}){
    //console.log(isTask);
  
    const category=categories.map((cat,index)=>(
        <button key={index} onClick={()=>setFilterBy(cat)}>{cat}</button>
    ))

    
    return(
        <div>
            <h5>Category Filters</h5>
            {/*render <button> element for each categoy here */}
            {category}
        </div>
    )
}
export default CategoryFilter;