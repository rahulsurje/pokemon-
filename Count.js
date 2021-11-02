import React,{useState} from "react"


function Count() {
    function decreasecount(){
        setState(state - 1)
    }
function increaseCount(){
    setState(state + 1)
}
    const [state,setState] = useState(0)
    return(
    <div>
        <button onClick={decreasecount}>-</button>
        <h2>{state}</h2>
        <button onClick={increaseCount}>+</button>
    </div>


    );
}

export default Count;