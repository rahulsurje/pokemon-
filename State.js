import React,{useState} from 'react'
var State = () =>{
    const [name,setName] = useState ("Reactjs")
    const [content,setContent] = useState ("lorem epsome is naot a keyword but accidently used to crete some shameless meaning for that instead you not reconise that also so that purpose")
    return <div>
        <h2>{name}</h2>
        <p>{content}</p>
        <button onClick={()=>{setName("Express Js")}}>change title</button>
    </div>


    
}
export default State