import React,{useState,useEffect} from 'react'
const API_URL = "https://randomfox.ca/floof/"

function FoxImage(){
    const [image,setImage]=useState(null)
    useEffect(()=>{
        fetch(API_URL)
        .then(res =>res.json())
        .then(data=>{
            setImage(data.image)
        })
    },[])
    if(!image){
        return <h2>Loading......</h2>
    }
    return(
        <div>
            <p>Here is a lovely fox for you:</p>
            <img
                src={image}
                alt="Fox Image"
            />
        </div>
    )
}

export default FoxImage;