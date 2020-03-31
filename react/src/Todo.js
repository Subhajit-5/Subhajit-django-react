import React from 'react'
import todoclass from './style.css'
function Todo(props){
    return(
        <div className="todoclass">
            <input type="checkbox" checked={props.completed}></input>
            <p>{props.name}</p>
        </div>
    )
}
export default Todo