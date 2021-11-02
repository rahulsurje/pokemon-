import axios from 'axios'
import React,{useState} from 'react'


const Axios2 = ()=>{
    const [data,setData]= useState([])
    const getData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            console.log(res.data)
           setData(res.data)
        },()=>{
            alert("Error while getting the data")
        })
    }

  return  <div>
       <button onClick={getData}>Get data</button>
       {
           data.map(function(element,index){
               return<ol key={index+1}>
                   <li>{element.id}</li>
                   <li>{element.name}</li>
                   <li>{element.email}</li>
               </ol>
           })
       }
       
    </div>
}
export default Axios2