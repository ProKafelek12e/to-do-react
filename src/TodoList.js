import React from "react";
import './todo.css'

export default function TodoList ({todoList}) {
    return (
            todoList.map((task) =>{
                return( 
                <div key={task.id} className="task">
                    <div>    
                        <h1>{task.title}</h1>
                        <button>✏️</button>
                        <button>❌</button>
                    </div>
                    <p>{task.description}</p>
                
                </div>
                )
            })
    )
}