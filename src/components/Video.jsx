import React,{useState} from 'react'
import video from '../data/video';


function Video(){
    const [upvotes,setUpvotes]=useState(video.upvotes)
    const [downvotes,setDownvotes]=useState(video.downvotes)
    const comments=video.comments.map(comment=>(
        <li key={comment.id}><h2>User: <b>{comment.user}</b></h2> <br/> Comment: <em>{comment.comment} </em></li>
    ))
    //console.log(comments)
    function handleUpvotes(){
        setUpvotes(upvotes=>upvotes+=1)
    }
    function handleDownvotes(){
        setDownvotes(downvotes=>downvotes+=1)
    }

    return(
        <div>
            <iframe
                length="70%"
                width="600px"
                src={video.embedUrl}
                allowFullScreen
            />
            <h3>{video.views} Views | Uploaded {video.createdAt}</h3>
            <button onClick={handleUpvotes}>{upvotes}👍</button> 
            <button onClick={handleDownvotes}>{downvotes}👎</button><br/>
            <button>Hide Comments</button>
            <h2>Comments:</h2>
            <ol>
                {comments} 
            </ol>
        </div>
    )
}
export default Video;